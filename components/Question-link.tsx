import Link from "next/link";
function QuestionLink({ path, linkText, question }: any) {
  return (
    <small className="sm:text-lg text-sm m-3">
      {question}
      <Link href={path}>
        <a className="text-sky-600 hover:underline">{linkText}</a>
      </Link>
    </small>
  );
}
export default QuestionLink;
