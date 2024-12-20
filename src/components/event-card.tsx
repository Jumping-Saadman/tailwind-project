import Image from "next/image";
import { CalendarIcon, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  imageUrl: string;
  title: string;
  seasonNumber: number;
  prizePool: number;
  slots: number;
  date: string;
  onDetailsClick: () => void;
}

export function EventCard({
  imageUrl,
  title,
  seasonNumber,
  prizePool,
  slots,
  date,
  onDetailsClick,
}: EventCardProps) {
  return (
    <Card className="bg-black w-72 max-w-sm overflow-hidden transition-transform duration-500 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-100 dark:text-gray-400 mb-4">
          Season {seasonNumber}
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-2 text-green-500" />
            <span className="text-green-400 text-3xl">
              {prizePool.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-green-400">{slots} slots</span>
          </div>
          <div className="flex items-center col-span-2">
            <CalendarIcon className="h-4 w-4 mr-2 text-red-500" />
            <span className="text-red-500">{date}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-black ">
        <Button onClick={onDetailsClick} className="w-full">
          More Details
        </Button>
      </CardFooter>
    </Card>
  );
}
