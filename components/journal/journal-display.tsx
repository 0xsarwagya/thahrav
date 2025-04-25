"use client";

import { Separator } from "@/components/ui/separator"
import blogPosts from "@/.content-collections/generated/allJournals"
import { JournalTitle } from "@/components/journal/title"
import { JournalSearch } from "@/components/journal/search"
import { FeaturedPost } from "@/components/journal/featured"
import type { Journal } from "@/.content-collections/generated"
import { BlogsDisplay } from "@/components/journal/blogs"
import { useState } from "react";
import { Newsletter } from "@/components/shared/newsletter";

export default function JournalDisplay() {
    const [posts, setPosts] = useState<Journal[]>(blogPosts as Journal[])
    const [categories, _] = useState<string[]>(posts.map((post) => post.category as string).concat("All").filter((item, i, ar) => ar.indexOf(item) === i));

    const handleFilter = (category: string) => {
        if (category === "All") {
            console.log("All")
            setPosts(blogPosts as Journal[])
        } else {
            const posts = blogPosts.filter((post) => post.category === category)
            console.log(posts)
            setPosts(blogPosts.filter((post) => post.category === category) as Journal[])
        }
    }

    const sortByDateOldest = (a: Journal, b: Journal) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
    }

    const sortByDateNewest = (a: Journal, b: Journal) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    }

    const sortByAlphabetical = (a: Journal, b: Journal) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
            return -1;
        }

        if (titleA > titleB) {
            return 1;
        }

        return 0;
    }

    const sort = (sortBy: 'asc' | 'desc' | 'alphabetical') => {
        if (sortBy === 'asc') {
            setPosts(posts.sort(sortByDateOldest))
        } else if (sortBy === 'desc') {
            setPosts(posts.sort(sortByDateNewest))
        } else if (sortBy === 'alphabetical') {
            setPosts(posts.sort(sortByAlphabetical))
        }
    }


    return (
        <div className="container px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
            {/* Title */}
            <JournalTitle />
            {/* Search and Filter */}
            <JournalSearch categories={categories} handleFilter={handleFilter} sort={sort} />
            <Separator className="my-6 sm:my-8" />
            {/* Featured Post */}
            <FeaturedPost post={posts[0]} />
            {/* Blog Posts Grid */}
            <BlogsDisplay posts={posts} />
            <Separator className="my-6 sm:my-8" />
            <Newsletter />
        </div>
    )
}
