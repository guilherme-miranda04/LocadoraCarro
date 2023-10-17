import stylesTable from "./VehiclesTable.module.css";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIcon from "@mui/icons-material/Create";

export const VehiclesTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className={stylesTable.recent_users}>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.plate}</td>
                <td>{row.brand}</td>
                <td>{row.model}</td>
                <td>{row.status}</td>
                <td>
                  <span className={stylesTable.actions}>
                    <DeleteForeverIcon
                      onClick={() => deleteRow(idx)}
                      style={{ cursor: "pointer", background: "#750a0a", fill: "#F2F2F2", borderRadius: "0.5rem", padding: "0.2rem" }}
                    />
                    <CreateIcon
                      onClick={() => editRow(idx)}
                      style={{ cursor: "pointer", background: "#3498db", fill: "#F2F2F2", borderRadius: "0.5rem", padding: "0.2rem", marginLeft: "0.4rem" }}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VehiclesTable;
