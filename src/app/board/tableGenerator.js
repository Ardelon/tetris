const TableGenerator = () => {
    let i = 0;

    let table = [];
    let array = Array(10).fill(false)

    while (i < 20) {
        table.push(array);       
        i++        
    }

    return table
}

export default TableGenerator

