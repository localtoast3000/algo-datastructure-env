export function multiplicationTable(size:number){
    const table:number[][] = []
    let currentRow:number[] = []

    for(let col = 1; table.length < size; col < size ? col++ : col = 1){
        if(currentRow.length === size){
            table.push(currentRow)
            currentRow = []
        }
        currentRow.push(col * (table.length + 1))
    }
    return table
}