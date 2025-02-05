import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


const data = [
  { id: 1, name: "Apple", price: "$1.00" },
  { id: 2, name: "Banana", price: "$0.50" },
  { id: 3, name: "Cherry", price: "$2.00" },
]

export function ListComponent() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
