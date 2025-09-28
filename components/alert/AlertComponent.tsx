import { Alert } from "@/components/templates/alert";
import alert from "@/config/Alert";

const AlertComponent = () => (
  <Alert
    variant={alert.variant}
    className="p-0 bg-transparent border-none rounded-none"
  >
    {alert.children}
  </Alert>
);

export default AlertComponent;
