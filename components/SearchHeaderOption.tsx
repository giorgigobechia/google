import { SearchIcon,PhotographIcon } from "@heroicons/react/outline";

export default function SearchHeaderOption({title,Icon}) {
    return(
        <div className="flex items-center space-x-1 border-b-4">
        <Icon className="h-4"/>
        <p>{title}</p>
        </div>
    )
}