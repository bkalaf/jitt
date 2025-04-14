import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $enum from '../enum';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import brand from './brand';
import productLine from './productLine';
import { Genders } from '../enums/genders';
import { ProductColors } from '../enums/productColors';
import { SizeGroups } from '../enums/sizeGroups';
import { Countries } from '../enums';
import { Generation } from '../enums/generation';
import { Decades } from '../enums/decades';
import { BacklineTypes } from '../enums/backlineTypes';
import { BookCategories } from '../enums/bookCategories';
import { BookGenres } from '../enums/bookGenres';
import { BookTypes } from '../enums/bookTypes';
import { ClosureTypes } from '../enums/closureTypes';
import { DriveFormFactors } from '../enums/driveFormFactors';
import { FabricTypes } from '../enums/fabricTypes';
import { CollarTypes } from '../enums/collarTypes';
import { CuffTypes } from '../enums/cuffTypes';
import { DriveInterfaces } from '../enums/driveInterfaces';
import { DriveTypes } from '../enums/driveTypes';
import { GarmentLengths } from '../enums/garmentLengths';
import { HeightMaps } from '../enums/heightMaps';
import { Holidays } from '../enums/holidays';
import { IronTypes } from '../enums/ironTypes';
import { JeansTypes } from '../enums/jeansTypes';
import { LapelTypes } from '../enums/lapelTypes';
import { LegStyles } from '../enums/legStyles';
import { LifestyleTypes } from '../enums/lifestyleTypes';
import { MaterialStyles } from '../enums/materialStyles';
import { MemoryTypes } from '../enums/memoryTypes';
import { MovieGenres } from '../enums/movieGenres';
import { MovieRatings } from '../enums/movieRatings';
import { MusicFormatTypes } from '../enums/musicFormatTypes';
import { NeckTypes } from '../enums/neckTypes';
import { PocketTypes } from '../enums/pocketTypes';
import { ProSportsTeams } from '../enums/proSportsTeams';
import { SportsLeagues } from '../enums/sportsLeagues';
import { ShaftTypes } from '../enums/shaftTypes';
import { ShoeHeelTypes } from '../enums/shoeHeelTypes';
import { ToeStyles } from '../enums/toeStyles';
import { VideoFormatTypes } from '../enums/videoFormatTypes';
import { WedgeTypes } from '../enums/wedgeTypes';
import { RiseTypes } from '../enums/riseTypes';
import { ShoeWidths } from '../enums/shoeWidths';
import { SleeveTypes } from '../enums/sleeveTypes';
import { SportTypes } from '../enums/sportTypes';
import { StrapTypes } from '../enums/strapTypes';
import { SleeveLengths } from '../enums/sleeveLengths';

const toMemory = z.object({
    brand: $fk.asSet.toMemory(brand.toMemory),
    productLine: $fk.asSet.toMemory(productLine.toMemory),
    backlineType: $enum.asSet.toMemory(BacklineTypes),
    bookCategory: $enum.asSet.toMemory(BookCategories),
    bookGenre: $enum.asSet.toMemory(BookGenres),
    bookType: $enum.asSet.toMemory(BookTypes),
    closureType: $enum.asSet.toMemory(ClosureTypes),
    collarType: $enum.asSet.toMemory(CollarTypes),
    colors: $enum.asSet.toMemory(ProductColors),
    cuffType: $enum.asSet.toMemory(CuffTypes),
    decade: $enum.asSet.toMemory(Decades),
    driveFormFactor: $enum.asSet.toMemory(DriveFormFactors),
    driveInterface: $enum.asSet.toMemory(DriveInterfaces),
    driveType: $enum.asSet.toMemory(DriveTypes),
    fabricType: z.record(z.number().min(0).max(100).optional(), FabricTypes),
    garmentLength: $enum.asSet.toMemory(GarmentLengths),
    gender: $enum.asSet.toMemory(Genders),
    generation: $enum.asSet.toMemory(Generation),
    heightMap: $enum.asSet.toMemory(HeightMaps),
    holiday: $enum.asSet.toMemory(Holidays),
    ironType: $enum.asSet.toMemory(IronTypes),
    jeansType: $enum.asSet.toMemory(JeansTypes),
    lapelType: $enum.asSet.toMemory(LapelTypes),
    legStyle: $enum.asSet.toMemory(LegStyles),
    lifestyleType: $enum.asSet.toMemory(LifestyleTypes),
    materialStyle: $enum.asSet.toMemory(MaterialStyles),
    memoryType: $enum.asSet.toMemory(MemoryTypes),
    movieGenre: $enum.asSet.toMemory(MovieGenres),
    movieRating: $enum.asSet.toMemory(MovieRatings),
    musicFormatType: $enum.asSet.toMemory(MusicFormatTypes),
    neckType: $enum.asSet.toMemory(NeckTypes),
    origin: $enum.asSet.toMemory(Countries),
    pocketType: $enum.asSet.toMemory(PocketTypes),
    proSportsTeam: $enum.asSet.toMemory(ProSportsTeams),
    riseType: $enum.asSet.toMemory(RiseTypes),
    shaftType: $enum.asSet.toMemory(ShaftTypes),
    shoeHeelType: $enum.asSet.toMemory(ShoeHeelTypes),
    shoeWidth: $enum.asSet.toMemory(ShoeWidths),
    sizeGroup: $enum.asSet.toMemory(SizeGroups),
    sleeveLength: $enum.asSet.toMemory(SleeveLengths),
    sleeveType: $enum.asSet.toMemory(SleeveTypes),
    sportsLeague: $enum.asSet.toMemory(SportsLeagues),
    sportType: $enum.asSet.toMemory(SportTypes),
    strapType: $enum.asSet.toMemory(StrapTypes),
    toeStyle: $enum.asSet.toMemory(ToeStyles),
    videoFormatType: $enum.asSet.toMemory(VideoFormatTypes),
    wedgeType: $enum.asSet.toMemory(WedgeTypes),
});

const toDatabase = z.object({
    brand: $fk.asSet.toDatabase(brand.toDatabase),
    productLine: $fk.asSet.toDatabase(productLine.toDatabase),
    backlineType: $enum.asSet.toDatabase(BacklineTypes),
    bookCategory: $enum.asSet.toDatabase(BookCategories),
    bookGenre: $enum.asSet.toDatabase(BookGenres),
    bookType: $enum.asSet.toDatabase(BookTypes),
    closureType: $enum.asSet.toDatabase(ClosureTypes),
    collarType: $enum.asSet.toDatabase(CollarTypes),
    colors: $enum.asSet.toDatabase(ProductColors),
    cuffType: $enum.asSet.toDatabase(CuffTypes),
    decade: $enum.asSet.toDatabase(Decades),
    driveFormFactor: $enum.asSet.toDatabase(DriveFormFactors),
    driveInterface: $enum.asSet.toDatabase(DriveInterfaces),
    driveType: $enum.asSet.toDatabase(DriveTypes),
    fabricType: z.record(z.number().min(0).max(100).optional(), FabricTypes),
    garmentLength: $enum.asSet.toDatabase(GarmentLengths),
    gender: $enum.asSet.toDatabase(Genders),
    generation: $enum.asSet.toDatabase(Generation),
    heightMap: $enum.asSet.toDatabase(HeightMaps),
    holiday: $enum.asSet.toDatabase(Holidays),
    ironType: $enum.asSet.toDatabase(IronTypes),
    jeansType: $enum.asSet.toDatabase(JeansTypes),
    lapelType: $enum.asSet.toDatabase(LapelTypes),
    legStyle: $enum.asSet.toDatabase(LegStyles),
    lifestyleType: $enum.asSet.toDatabase(LifestyleTypes),
    materialStyle: $enum.asSet.toDatabase(MaterialStyles),
    memoryType: $enum.asSet.toDatabase(MemoryTypes),
    movieGenre: $enum.asSet.toDatabase(MovieGenres),
    movieRating: $enum.asSet.toDatabase(MovieRatings),
    musicFormatType: $enum.asSet.toDatabase(MusicFormatTypes),
    neckType: $enum.asSet.toDatabase(NeckTypes),
    origin: $enum.asSet.toDatabase(Countries),
    pocketType: $enum.asSet.toDatabase(PocketTypes),
    proSportsTeam: $enum.asSet.toDatabase(ProSportsTeams),
    riseType: $enum.asSet.toDatabase(RiseTypes),
    shaftType: $enum.asSet.toDatabase(ShaftTypes),
    shoeHeelType: $enum.asSet.toDatabase(ShoeHeelTypes),
    shoeWidth: $enum.asSet.toDatabase(ShoeWidths),
    sizeGroup: $enum.asSet.toDatabase(SizeGroups),
    sleeveLength: $enum.asSet.toDatabase(SleeveLengths),
    sleeveType: $enum.asSet.toDatabase(SleeveTypes),
    sportsLeague: $enum.asSet.toDatabase(SportsLeagues),
    sportType: $enum.asSet.toDatabase(SportTypes),
    strapType: $enum.asSet.toDatabase(StrapTypes),
    toeStyle: $enum.asSet.toDatabase(ToeStyles),
    videoFormatType: $enum.asSet.toDatabase(VideoFormatTypes),
    wedgeType: $enum.asSet.toDatabase(WedgeTypes)
});

export default {
    toMemory,
    toDatabase
};

export type TraitsMemory = z.infer<typeof toMemory>;
export type TraitsDatabase = z.infer<typeof toDatabase>;

