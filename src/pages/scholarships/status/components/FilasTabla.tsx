import { Radio, RadioGroup } from "@nextui-org/react";


export const FilasTabla = () => {
  return (
    <div className="grid grid-cols-3 gap-4  items-center rounded-lg px-8 py-4">
      <div className="flex items-center">
        <RadioGroup defaultValue={"s"}>
          <Radio value={"s"}  color="success" />
        </RadioGroup>
        <p className="ml-2">UX/UI Design Certification by Google</p>
      </div>
      <p className="flex justify-center">Google</p>
      <p className="text-green-500 flex justify-end">Accepted</p>
    </div>
  );
};
