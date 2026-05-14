type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  btnVariant?: string;
};

export default function Button({ children, btnVariant, ...props }: Props){
    return(
        <button className={btnVariant} {...props}>
            {children}
        </button>
    )
}