export interface User {
    name: string;
    email: string;
    password: string;
    mode: any;

    //driver data
    rate: number;
    currentLoc: [number, number];

    // rider data
    destinationLoc: string;
    pickupLoc: string;
    passCount: number;
    
}