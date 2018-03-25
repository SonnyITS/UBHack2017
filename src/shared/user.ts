export interface User {
    email: string;
    password: string;
    mode: any;

    //driver data
    rate: number;
    currentLoc: [number, number];

    // rider data
    destinationLoc: [number, number];
    pickupLoc: [number, number];
    passCount: number;
    
}