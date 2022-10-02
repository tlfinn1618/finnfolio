import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faDeleteLeft,
  faSpinner,
  faCirclePlus,
  faPhone,
  faEnvelope,
  faLock,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faDeleteLeft,
    faSpinner,
    faCirclePlus,
    faPhone,
    faEnvelope,
    faLock,
    faMapMarkedAlt
  );
};

export default Icons;
