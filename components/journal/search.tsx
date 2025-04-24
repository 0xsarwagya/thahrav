import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const JournalSearch = ({ categories, handleFilter, sort }: { categories: string[], handleFilter: (category: string) => void, sort: (sortBy: 'asc' | 'desc' | 'alphabetical') => void; }) => {
    return (
        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between md:mt-12">
            <div className="flex items-center gap-2 sm:gap-4">
                <span className="text-sm font-semibold">Filter by:</span>

                <Select onValueChange={(e) => handleFilter(e)} defaultValue="All">
                    <SelectTrigger className="w-[140px] max-w-xs">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>{category}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>


                <Select onValueChange={(e) => sort(e as "asc" | "desc" | "alphabetical")} defaultValue="asc">
                    <SelectTrigger className="w-[140px] max-w-xs">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value={"asc"}>Newest</SelectItem>
                            <SelectItem value={"desc"}>Oldest</SelectItem>
                            <SelectItem value={"alphabetical"}>Alphabetical</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}