import Footer from "./footer";
import Header from "./header";

interface TemplateProps {
  children?: React.ReactNode;
}

export default function Template(props: TemplateProps) {
  const { children } = props;

  return (
    <>
      <Header />
      <div className="bg-orange-100">{children}</div>
      <Footer />
    </>
  );
}
