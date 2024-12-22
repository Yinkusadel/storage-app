import React from 'react'

const Page = async ({ searchParams, params }: SearchParamProps) => {
    const type = ((await params)?.type as string) || "";
    const searchText = ((await searchParams)?.query as string) || "";
    const sort = ((await searchParams)?.sort as string) || "";


    return (
        <div className="page-container">
            <section className="w-full">
                <h1 className="h1 capitalize">{type}</h1>
            </section>
        </div>
    )
}


export default Page;