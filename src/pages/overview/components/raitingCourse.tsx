import {Card,CardBody} from "@nextui-org/react";

type RaitingCourseProps = {
    rating: number;
    enrolled: number;
}
export const RaitingCourse = ({rating,enrolled}:RaitingCourseProps) => {
    
    return (
       <Card className="py-2 bg-[#0C0C0C] px-7 mt-3">
          <CardBody>
             <section className="grid justify-between grid-cols-2 gap-y-2">
                <article>Rating</article>
                <article>Enrolled</article>
                <article className="text-2xl font-semibold">{rating}</article>
                <article className="text-2xl font-semibold">{enrolled} students</article>
             </section>
          </CardBody>
       </Card>
    )
}