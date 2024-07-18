import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

const iconMap = {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
};

export function InfoCard({ icon, title, date, children }) {
  const Icon = iconMap[icon];
  return (
    <Card>
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible"
        floated={false}
        shadow={false}
      >
        <div className="flex flex-col gap-1 w-full">
          <Typography color="blue" className="font-bold text-xs">
            {date}
          </Typography>
          <Typography color="blue-gray" variant="h5" className="w-full">
            {title}
          </Typography>
        </div>
        <IconButton
          className="flex-shrink-0 pointer-events-none"
          ripple={false}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </IconButton>
      </CardHeader>
      <CardBody className="grid justify-start !px-3.5 pt-2">
        <p
          className="font-normal !text-gray-500"
          dangerouslySetInnerHTML={{ __html: children }}
        ></p>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
