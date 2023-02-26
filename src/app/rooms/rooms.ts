export interface AllRoomsData {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface Room {
  roomType: string;
  amenities: string[];
  price: number;
  photos: string[];
  checkInTime: Date;
  checkOutTime: Date;
  rating: number
}
