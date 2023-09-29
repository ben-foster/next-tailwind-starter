import tw from "tailwind-styled-components";

const Form = tw.form`
    flex 
    flex-col
`;

const Input = tw.input`
    w-full 
    rounded 
    border 
    px-3 
    py-2
    text-base 
    outline-none 
    text-gray-800
    focus:border-blue-400
    disabled:text-gray-500
    placeholder:text-gray-300
`;

const FileInput = tw.input`
    w-full 
    rounded 
    border 
    px-3 
    py-2
    text-base 
    outline-none 
    focus:border-blue-400
    disabled:text-gray-500
`;

const Textarea = tw.textarea`
    w-full 
    rounded 
    border 
    px-3 
    py-2
    text-base 
    outline-none 
    focus:border-blue-400
    disabled:text-gray-500
`;

const Label = tw.label`
    w-full 
    flex 
    flex-col 
    mb-3 
    text-xs 
    font-medium 
    tracking-loose 
    text-gray-500 
    uppercase
`;

const Title = tw.h2`
    w-full 
    mt-2 
    font-bold
    pb-2
    border-b
    border-gray-200
`;

const Fieldset = tw.fieldset`
    w-full 
    flex 
    flex-col
    disabled:text-gray-500
`;

const Select = tw.select`
    px-3 
    py-2
    w-full
    border 
    border-solid 
    border-gray-300 
    rounded 
    appearance-none 
    bg-white
    appearance-none
    hover:border-blue-300 
    focus:border-blue-300 
    focus:shadow
    disabled:text-gray-500
    text-base
`;

const SubmitButton = tw.button`
    px-3 
    py-2 
    my-1 
    rounded 
    ml-auto 
    bg-blue-500 
    text-white 
    font-medium 
    outline-none 
    border 
    border-blue-500 
    hover:border-blue-400 
    focus:border-blue-500 
    hover:bg-blue-600 
    focus:bg-blue-600
    disabled:bg-gray-300
    disabled:border-gray-300
`;

const LinkButton = tw.a`
    px-3 
    py-2 
    my-1 
    rounded 
    ml-auto 
    bg-blue-500 
    text-white 
    font-medium 
    outline-none 
    border 
    border-blue-500 
    hover:border-blue-400 
    focus:border-blue-500 
    hover:bg-blue-600 
    focus:bg-blue-600
`;

const DeleteButton = tw.button`
    px-3 
    py-2 
    my-1 
    rounded
    bg-white
    text-red-500 
    font-medium 
    outline-none 
    border 
    border-red-500 
    hover:border-red-400 
    focus:border-red-500 
    hover:text-white
    hover:bg-red-600
    focus:text-white
    focus:bg-red-600
`;

const SuccessMessage = tw.p`
    w-full
    px-3 
    py-2 
    bg-green-200 
    rounded 
    border 
    border-green-500 
    text-green-700
    text-sm
`;

export { Form, Title, Label, Input, FileInput, Textarea, Select, Fieldset, SubmitButton, LinkButton, DeleteButton, SuccessMessage };