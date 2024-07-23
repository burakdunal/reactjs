import { Typography } from "@material-tailwind/react";
 
export function BasicFooter() {
  return (
    <footer className="w-full bg-white p-8">
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 <a
            href="https://www.esoyazilim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Eso Yazılım
          </a>
      </Typography>
    </footer>
  );
}