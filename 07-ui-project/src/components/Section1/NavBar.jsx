const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-18">
      <h4 className="px-6 py-2 text-white bg-black rounded-full uppercase">
        TARGET AUDIENCE
      </h4>

      <ul className="flex gap-4 tracking-widest text-sm">
        <li>DIGITAL</li>
        <li>BANKING</li>
        <li>PLATFORM</li>
      </ul>
    </div>
  );
};

export default NavBar;
