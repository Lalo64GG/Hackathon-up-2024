
type DescriptionProps = {
    descrition: string
}
export const Description = ({ descrition }: DescriptionProps) => {

    return (
        <article className="flex flex-col mt-10">
            <p className="mb-2 font-medium">Description:</p>
            <p>{descrition}</p>
        </article>
    )
}