import { ImSpinner } from "react-icons/im";

export default function Loader() {
  return (
    <div className="flex items-center justify-center gap-2">Loading <ImSpinner className="animate-spin"/></div>
  )
}
