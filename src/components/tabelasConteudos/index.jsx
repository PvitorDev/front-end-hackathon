import { Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer, TableFooter } from '@mui/material'


export function TabelaConteudos(){
    const tableData = [
        {
            nome: 'Sara Silva',
            id: 56546136,
            valor: 'R$ ' + 2000
        },
        {
            nome: 'Carlos Prado',
            id: 56546136,
            valor: 'R$ ' + 2000
        },
        {
            nome: 'Lara Brito',
            id: 56546136,
            valor: 'R$ ' + 2000
        },
        {
            nome: 'Soraia Neves',
            id: 56546136,
            valor: 'R$ ' + 2000
        },
    ]
    return(
        <TableContainer className='container-table-defaulters' component={Paper}
        sx={{
            borderRadius: '20px',
            maxWidth: '556px'
        }}>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <TableCell align="center" colSpan={2}>
                        <div className='clients-icon'>
                            <img src="{ClientIcon}" /><h2>Fullstack</h2>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><h4>Titulo</h4></TableCell>
                    <TableCell><h4>Criado por</h4></TableCell>
                    <TableCell><h4>Tipo</h4></TableCell>
                </TableRow>
            </TableHead>
            <TableBody
                sx={{
                    maxWidth: '556px'
                }}>
                {
                    tableData.map(row => (
                        <TableRow key={row.id}>
                            <TableCell sx={{
                                maxWidth: '108px',
                                paddin: '5px'
                            }}>{row.nome}</TableCell>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.valor}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        <p> <a href="">Ver todos</a></p>
    </TableContainer>
    )  
}