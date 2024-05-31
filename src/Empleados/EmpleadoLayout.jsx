import { ContainerEmp } from "./empleados";

export function EmpleadosLayout({ children }) {
  return (
    <main>
      <ContainerEmp/>
      {children}
    </main>
  );
}
