type ButtonProp = {
  children: React.ReactNode;
};
export default function Button({ children }: ButtonProp) {
  return <button>{children}</button>;
}
