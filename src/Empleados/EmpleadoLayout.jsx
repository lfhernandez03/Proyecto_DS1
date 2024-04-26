import { ContainerEmp } from "./empleados";

export default function EmpleadoLayout({ children }) {
  return (
    <main>
      <ContainerEmp/>
      {children}
    </main>
  );
}
