export default function Logo() {
  return (
    <div className="flex items-center">
      <span className="group relative text-4xl font-bold text-blue-600">
        same
        <span className="absolute inset-x-0 top-0 border-b-2 border-t-2 border-transparent transition-all duration-300 group-hover:border-white"></span>
      </span>
      <span className="group relative text-4xl font-bold text-white">
        book
        <span className="absolute inset-x-0 bottom-0 border-b-2 border-t-2 border-transparent transition-all duration-300 group-hover:border-blue-600"></span>
      </span>
    </div>
  );
}
