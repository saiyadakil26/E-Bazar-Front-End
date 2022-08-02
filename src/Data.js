import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Data = () =>{
    const[item, setitem] = useState([]);
    useEffect(() => {
        fetch("http://localhost/fechdata.php")
        .then(res => res.json())
        .then(
            (result) =>{
                setitem(result);
            }
        )
    },[])
return(
<div>
<table className="table table-bordered">
<thead className="thred-dark">
    <tr>
        <th>email</th>
        <th>Username</th>
    </tr>
</thead>
<tbody>
{ item.map(item => (
<tr>
<td>{item.email}</td>
<td>{item.username}</td>
</tr>
))}
</tbody>
</table>
</div>
)


}
export default Data;