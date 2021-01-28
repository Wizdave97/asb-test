import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { EntriesCell, IssuesCell, LocationCell, NameCell, RiskCell } from './Cells';
import { gql, useQuery } from '@apollo/client'
import './index.scss'

const GET_PEOPLE = gql`
    query GetPeople {
        allPeople {
        id,
        name,
        issues,
        risk,
        state,
        address,
        entries
    }
}
`

interface Data {
    id: number,
    name: string;
    issues: number;
    location: {
        state: string;
        address: string;
    }
    entries: number;
    risk: RISK_PROFILE;
}

function createData(
    { id,
        name,
        issues,
        state,
        address,
        entries,
        risk,
    }: any): Data {
    return { id, name, issues, location: { state, address }, entries, risk };
}



interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}
export enum RISK_PROFILE {
    LOW_RISK = 'low_risk',
    HIGH_RISK = 'high_risk',
    MID_RISK = 'mid_risk'
}

const headCells: HeadCell[] = [
    { id: 'name', numeric: false, disablePadding: true, label: 'NAME' },
    { id: 'location', numeric: true, disablePadding: false, label: 'LOCATION' },
    { id: 'issues', numeric: false, disablePadding: false, label: 'STATUS' },
    { id: 'entries', numeric: true, disablePadding: false, label: 'ENTRIES' },
    { id: 'risk', numeric: true, disablePadding: false, label: 'RISK PROFILE' },
];

interface EnhancedTableProps {
    numSelected: number;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, numSelected, rowCount } = props;

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                <TableCell />
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align='left'
                        padding='default'
                    >
                        {headCell.label}

                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}




export default function EnhancedTable() {
    const [selected, setSelected] = React.useState<string[]>([]);
    const { data, loading, error } = useQuery(GET_PEOPLE)


    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n: any) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };


    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    if (loading || error) return null
    const rows = data.allPeople.map((data: any) => createData(data))
    return (
                <TableContainer className={`container`}>
                    <Table
                        aria-labelledby="tableTitle"
                        size='medium'
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {rows.map((row: any, index: number) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.name)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        <TableCell />
                                        <TableCell id={labelId} scope="row">
                                            <NameCell name={row.name} />
                                        </TableCell>
                                        <TableCell align="left"><LocationCell state={row.location.state} address={row.location.address} /></TableCell>
                                        <TableCell align="left"><IssuesCell issues={row.issues} /></TableCell>
                                        <TableCell align="left"><EntriesCell entries={row.entries} /></TableCell>
                                        <TableCell align="left"><RiskCell risk={row.risk} /></TableCell>
                                    </TableRow>
                                );
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
    );
}
