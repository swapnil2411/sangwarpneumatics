type Props = {
  children: React.ReactNode;
  btnVariant?: string;
};

export default function Button({ children, btnVariant }: Props){
    return(
        <button className={btnVariant}>{children}</button>
    )
}