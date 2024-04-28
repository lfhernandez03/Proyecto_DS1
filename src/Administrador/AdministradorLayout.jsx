import { Admin } from "./administrador";

export function AdminLayout({ children }) {
    return (
      <main>
        <Admin/>
        {children}
      </main>
    );
  }