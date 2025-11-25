import CourseList from "@/components/CourseList";

export default function CoursePage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-xl font-bold">7일 탐색 코스</h1>
        <p className="text-sm text-gray-600 mt-1">
          하루 3~5분, 한 걸음씩 괜찮습니다.
        </p>
      </header>
      <CourseList />
    </div>
  );
}
