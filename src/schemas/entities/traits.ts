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
import { Genders } from '../valueTypes/enums/genders';
import { ProductColors } from '../valueTypes/enums/productColors';
import { SizeGroups } from '../valueTypes/enums/sizeGroups';
import { Countries } from '../valueTypes/enums';
import { Generation } from '../valueTypes/enums/generation';
import { Decades } from '../valueTypes/enums/decades';
import { BacklineTypes } from '../valueTypes/enums/backlineTypes';
import { BookCategories } from '../valueTypes/enums/bookCategories';
import { BookGenres } from '../valueTypes/enums/bookGenres';
import { BookTypes } from '../valueTypes/enums/bookTypes';
import { ClosureTypes } from '../valueTypes/enums/closureTypes';
import { DriveFormFactors } from '../valueTypes/enums/driveFormFactors';
import { FabricTypes } from '../valueTypes/enums/fabricTypes';
import { CollarTypes } from '../valueTypes/enums/collarTypes';
import { CuffTypes } from '../valueTypes/enums/cuffTypes';
import { DriveInterfaces } from '../valueTypes/enums/driveInterfaces';
import { DriveTypes } from '../valueTypes/enums/driveTypes';
import { GarmentLengths } from '../valueTypes/enums/garmentLengths';
import { HeightMaps } from '../valueTypes/enums/heightMaps';
import { Holidays } from '../valueTypes/enums/holidays';
import { IronTypes } from '../valueTypes/enums/ironTypes';
import { JeansTypes } from '../valueTypes/enums/jeansTypes';
import { LapelTypes } from '../valueTypes/enums/lapelTypes';
import { LegStyles } from '../valueTypes/enums/legStyles';
import { LifestyleTypes } from '../valueTypes/enums/lifestyleTypes';
import { MaterialStyles } from '../valueTypes/enums/materialStyles';
import { MemoryTypes } from '../valueTypes/enums/memoryTypes';
import { MovieGenres } from '../valueTypes/enums/movieGenres';
import { MovieRatings } from '../valueTypes/enums/movieRatings';
import { MusicFormatTypes } from '../valueTypes/enums/musicFormatTypes';
import { NeckTypes } from '../valueTypes/enums/neckTypes';
import { PocketTypes } from '../valueTypes/enums/pocketTypes';
import { ProSportsTeams } from '../valueTypes/enums/proSportsTeams';
import { SportsLeagues } from '../valueTypes/enums/sportsLeagues';
import { ShaftTypes } from '../valueTypes/enums/shaftTypes';
import { ShoeHeelTypes } from '../valueTypes/enums/shoeHeelTypes';
import { ToeStyles } from '../valueTypes/enums/toeStyles';
import { VideoFormatTypes } from '../valueTypes/enums/videoFormatTypes';
import { WedgeTypes } from '../valueTypes/enums/wedgeTypes';
import { RiseTypes } from '../valueTypes/enums/riseTypes';
import { ShoeWidths } from '../valueTypes/enums/shoeWidths';
import { SleeveTypes } from '../valueTypes/enums/sleeveTypes';
import { SportTypes } from '../valueTypes/enums/sportTypes';
import { StrapTypes } from '../valueTypes/enums/strapTypes';
import { SleeveLengths } from '../valueTypes/enums/sleeveLengths';

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

