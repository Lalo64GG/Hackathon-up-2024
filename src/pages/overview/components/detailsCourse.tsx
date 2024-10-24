import { CardDetails } from "./cardDetails"

type DetailCourseProps = {
    numLesson:number,
    duration:number,
    level:number
}

export const DetailCourse = ({numLesson,duration,level}:DetailCourseProps) =>{
     
    return (
        <div className="flex flex-col mt-10">
            <h3 className="mb-6 font-semibold text-md">Course Details</h3>

            <article className="flex flex-row justify-start gap-x-4">
               <CardDetails title="Lesson " description={`${numLesson}`}/>
               <CardDetails title="Duration" description={`${duration} hours`}/>
               <CardDetails title="Skill level" description={`${level}`}/>
            </article>
        </div>
    )
}