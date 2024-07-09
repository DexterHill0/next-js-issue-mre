const Layout: React.FC<{
    children: React.ReactNode;
    header: React.ReactNode;
}> = ({ children, header }) => {
    return (
        <div className="h-screen grid">
            {header}

            <div className="flex flex-col flex-auto md:overflow-hidden overflow-auto h-full">
                {children}
            </div>
        </div>
    );
};

export default Layout;
