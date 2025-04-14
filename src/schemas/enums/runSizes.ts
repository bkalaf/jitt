import { z } from 'zod';
import { groupBy } from '../../common/groupBy';
import { sizes, sizesToGroup } from './sizes';

const master = new Map();

for (const [text, index] of Object.entries(sizes)) {
    master.set(index, { text });
}

for (const [index, groups] of Object.entries(sizesToGroup)) {
    const g = groups.filter((x) =>
        [
            'menletter',
            'womenletter',
            'suitsizes',
            'waistsizes',
            'bustsizes',
            'youthsizes',
            'womenfootwear',
            'menfootwear'
        ].includes(x)
    );
    if (g.length > 1) throw new Error(`GROUP too big: ${g.join(', ')}`);
    master.set(index, {
        ...master.get(index),
        group: [g.length === 1 ? g[0] : g]
    });
}

console.log(Object.fromEntries(master.entries()));

console.log(
    JSON.stringify(
        groupBy('group')(
            Array.from(master.entries()).map(
                ([index, { group, text }]: any) => ({
                    index,
                    group,
                    text
                })
            )
        )
    , null, '\t')
);

const SIZES = {
    womenletter: [
        {
            index: '001',
            group: ['womenletter'],
            text: 'XXS (00)'
        },
        {
            index: '002',
            group: ['womenletter'],
            text: 'XS (0-2)'
        },
        {
            index: '003',
            group: ['womenletter'],
            text: 'S (4-6)'
        },
        {
            index: '004',
            group: ['womenletter'],
            text: 'M (8-10)'
        },
        {
            index: '005',
            group: ['womenletter'],
            text: 'L (12-14)'
        },
        {
            index: '006',
            group: ['womenletter'],
            text: 'XL (16-18)'
        },
        {
            index: '007',
            group: ['womenletter'],
            text: '2XL (20-22)'
        },
        {
            index: '160',
            group: ['womenletter'],
            text: '3XL (24-26)'
        },
        {
            index: '161',
            group: ['womenletter'],
            text: '4XL (28-30)'
        },
        {
            index: '162',
            group: ['womenletter'],
            text: '5XL (32-34)'
        },
        {
            index: '163',
            group: ['womenletter'],
            text: 'One Size'
        },
        {
            index: '289',
            group: ['womenletter'],
            text: '1X (16-18)'
        },
        {
            index: '290',
            group: ['womenletter'],
            text: 'Petite XXS (0)'
        },
        {
            index: '291',
            group: ['womenletter'],
            text: 'Petite XS (0-2)'
        },
        {
            index: '292',
            group: ['womenletter'],
            text: 'Petite S (4-6)'
        },
        {
            index: '293',
            group: ['womenletter'],
            text: 'Petite M (8-10)'
        },
        {
            index: '294',
            group: ['womenletter'],
            text: 'Petite L (12-14)'
        },
        {
            index: '295',
            group: ['womenletter'],
            text: 'Petite XL (16-18)'
        },
        {
            index: '296',
            group: ['womenletter'],
            text: 'Petite P1X (16-18)'
        },
        {
            index: '297',
            group: ['womenletter'],
            text: 'Petite 2XL (20-22)'
        },
        {
            index: '298',
            group: ['womenletter'],
            text: 'Petite 3XL (24-26)'
        },
        {
            index: '299',
            group: ['womenletter'],
            text: 'Petite 4XL (28-30)'
        },
        {
            index: '300',
            group: ['womenletter'],
            text: 'Petite 5XL (32-34)'
        },
        {
            index: '301',
            group: ['womenletter'],
            text: 'Maternity XXS (0)'
        },
        {
            index: '302',
            group: ['womenletter'],
            text: 'Maternity XS (0-2)'
        },
        {
            index: '303',
            group: ['womenletter'],
            text: 'Maternity S (4-6)'
        },
        {
            index: '304',
            group: ['womenletter'],
            text: 'Maternity M (8-10)'
        },
        {
            index: '305',
            group: ['womenletter'],
            text: 'Maternity L (12-14)'
        },
        {
            index: '306',
            group: ['womenletter'],
            text: 'Maternity XL (16-18)'
        },
        {
            index: '307',
            group: ['womenletter'],
            text: 'Maternity P1X (16-18)'
        },
        {
            index: '308',
            group: ['womenletter'],
            text: 'Maternity 2XL (20-22)'
        },
        {
            index: '309',
            group: ['womenletter'],
            text: 'Maternity 3XL (24-26)'
        },
        {
            index: '310',
            group: ['womenletter'],
            text: 'Maternity 4XL (28-30)'
        },
        {
            index: '311',
            group: ['womenletter'],
            text: 'Maternity 5XL (32-34)'
        },
        {
            index: '312',
            group: ['womenletter'],
            text: 'Tall XXS (0)'
        },
        {
            index: '313',
            group: ['womenletter'],
            text: 'Tall XS (0-2)'
        },
        {
            index: '314',
            group: ['womenletter'],
            text: 'Tall S (4-6)'
        },
        {
            index: '315',
            group: ['womenletter'],
            text: 'Tall M (8-10)'
        },
        {
            index: '316',
            group: ['womenletter'],
            text: 'Tall L (12-14)'
        },
        {
            index: '317',
            group: ['womenletter'],
            text: 'Tall XL (16-18)'
        },
        {
            index: '318',
            group: ['womenletter'],
            text: 'Tall P1X (16-18)'
        },
        {
            index: '319',
            group: ['womenletter'],
            text: 'Tall 2XL (20-22)'
        },
        {
            index: '320',
            group: ['womenletter'],
            text: 'Tall 3XL (24-26)'
        },
        {
            index: '321',
            group: ['womenletter'],
            text: 'Tall 4XL (28-30)'
        },
        {
            index: '322',
            group: ['womenletter'],
            text: 'Tall 5XL (32-34)'
        },
        {
            index: '351',
            group: ['womenletter'],
            text: 'Juniors: XS (0-1)'
        },
        {
            index: '352',
            group: ['womenletter'],
            text: 'Juniors: S (3-5)'
        },
        {
            index: '353',
            group: ['womenletter'],
            text: 'Juniors: M (7-9)'
        },
        {
            index: '354',
            group: ['womenletter'],
            text: 'Juniors: L (11-13)'
        },
        {
            index: '355',
            group: ['womenletter'],
            text: 'Juniors: XL (15-17)'
        }
    ],
    menletter: [
        {
            index: '008',
            group: ['menletter'],
            text: 'XS (30-32)'
        },
        {
            index: '009',
            group: ['menletter'],
            text: 'S (34-36)'
        },
        {
            index: '010',
            group: ['menletter'],
            text: 'M (38-40)'
        },
        {
            index: '011',
            group: ['menletter'],
            text: 'L (42-44)'
        },
        {
            index: '012',
            group: ['menletter'],
            text: 'XL (46-48)'
        },
        {
            index: '013',
            group: ['menletter'],
            text: 'XXL (50-52)'
        },
        {
            index: '164',
            group: ['menletter'],
            text: '3XL (54-56)'
        },
        {
            index: '165',
            group: ['menletter'],
            text: '4XL (58-60)'
        },
        {
            index: '166',
            group: ['menletter'],
            text: '5XL (62-64)'
        },
        {
            index: '167',
            group: ['menletter'],
            text: 'One size [Mens]'
        },
        {
            index: '332',
            group: ['menletter'],
            text: 'Tall 4XL (58-60)'
        },
        {
            index: '333',
            group: ['menletter'],
            text: 'Tall 5XL (62-64)'
        },
        {
            index: '340',
            group: ['menletter'],
            text: 'Tall M'
        },
        {
            index: '341',
            group: ['menletter'],
            text: 'Tall L'
        },
        {
            index: '342',
            group: ['menletter'],
            text: 'Tall XL'
        },
        {
            index: '343',
            group: ['menletter'],
            text: 'Tall XXL'
        },
        {
            index: '344',
            group: ['menletter'],
            text: 'Tall XXXL+'
        },
        {
            index: '345',
            group: ['menletter'],
            text: 'Big 1X'
        },
        {
            index: '346',
            group: ['menletter'],
            text: 'Big 2X'
        },
        {
            index: '347',
            group: ['menletter'],
            text: 'Big 3X'
        },
        {
            index: '348',
            group: ['menletter'],
            text: 'Big 4X'
        }
    ],
    waistsizes: [
        {
            index: '014',
            group: ['waistsizes'],
            text: '23 in'
        },
        {
            index: '015',
            group: ['waistsizes'],
            text: '24 in'
        },
        {
            index: '016',
            group: ['waistsizes'],
            text: '25 in'
        },
        {
            index: '017',
            group: ['waistsizes'],
            text: '26 in'
        },
        {
            index: '018',
            group: ['waistsizes'],
            text: '27 in'
        },
        {
            index: '019',
            group: ['waistsizes'],
            text: '28 in'
        },
        {
            index: '020',
            group: ['waistsizes'],
            text: '29 in'
        },
        {
            index: '021',
            group: ['waistsizes'],
            text: '30 in'
        },
        {
            index: '022',
            group: ['waistsizes'],
            text: '31 in'
        },
        {
            index: '023',
            group: ['waistsizes'],
            text: '32 in'
        },
        {
            index: '024',
            group: ['waistsizes'],
            text: '33 in'
        },
        {
            index: '025',
            group: ['waistsizes'],
            text: '34 in'
        },
        {
            index: '026',
            group: ['waistsizes'],
            text: '36 in'
        },
        {
            index: '027',
            group: ['waistsizes'],
            text: '38 in'
        },
        {
            index: '028',
            group: ['waistsizes'],
            text: '40 in'
        },
        {
            index: '029',
            group: ['waistsizes'],
            text: '42 in'
        },
        {
            index: '030',
            group: ['waistsizes'],
            text: '44 in'
        },
        {
            index: '031',
            group: ['waistsizes'],
            text: '46 in'
        },
        {
            index: '032',
            group: ['waistsizes'],
            text: '48 in'
        },
        {
            index: '033',
            group: ['waistsizes'],
            text: '50 in'
        },
        {
            index: '034',
            group: ['waistsizes'],
            text: '52 in'
        },
        {
            index: '327',
            group: ['waistsizes'],
            text: '54 in'
        },
        {
            index: '328',
            group: ['waistsizes'],
            text: '56 in'
        },
        {
            index: '329',
            group: ['waistsizes'],
            text: '58+ in'
        }
    ],
    suitsizes: [
        {
            index: '035',
            group: ['suitsizes'],
            text: '38S'
        },
        {
            index: '036',
            group: ['suitsizes'],
            text: '40S'
        },
        {
            index: '037',
            group: ['suitsizes'],
            text: '42S'
        },
        {
            index: '038',
            group: ['suitsizes'],
            text: '44S'
        },
        {
            index: '039',
            group: ['suitsizes'],
            text: '48S'
        },
        {
            index: '040',
            group: ['suitsizes'],
            text: '50S'
        },
        {
            index: '041',
            group: ['suitsizes'],
            text: '52S'
        },
        {
            index: '042',
            group: ['suitsizes'],
            text: '54S'
        },
        {
            index: '043',
            group: ['suitsizes'],
            text: '56S'
        },
        {
            index: '044',
            group: ['suitsizes'],
            text: '38R'
        },
        {
            index: '045',
            group: ['suitsizes'],
            text: '40R'
        },
        {
            index: '046',
            group: ['suitsizes'],
            text: '42R'
        },
        {
            index: '047',
            group: ['suitsizes'],
            text: '44R'
        },
        {
            index: '048',
            group: ['suitsizes'],
            text: '48R'
        },
        {
            index: '049',
            group: ['suitsizes'],
            text: '50R'
        },
        {
            index: '050',
            group: ['suitsizes'],
            text: '52R'
        },
        {
            index: '051',
            group: ['suitsizes'],
            text: '54R'
        },
        {
            index: '052',
            group: ['suitsizes'],
            text: '56R'
        },
        {
            index: '053',
            group: ['suitsizes'],
            text: '38L'
        },
        {
            index: '054',
            group: ['suitsizes'],
            text: '40L'
        },
        {
            index: '055',
            group: ['suitsizes'],
            text: '42L'
        },
        {
            index: '056',
            group: ['suitsizes'],
            text: '44L'
        },
        {
            index: '057',
            group: ['suitsizes'],
            text: '48L'
        },
        {
            index: '058',
            group: ['suitsizes'],
            text: '50L'
        },
        {
            index: '059',
            group: ['suitsizes'],
            text: '52L'
        },
        {
            index: '060',
            group: ['suitsizes'],
            text: '54L'
        },
        {
            index: '061',
            group: ['suitsizes'],
            text: '56L'
        },
        {
            index: '226',
            group: ['suitsizes'],
            text: '36S'
        },
        {
            index: '227',
            group: ['suitsizes'],
            text: '36R'
        },
        {
            index: '228',
            group: ['suitsizes'],
            text: '46S'
        },
        {
            index: '229',
            group: ['suitsizes'],
            text: '46R'
        },
        {
            index: '230',
            group: ['suitsizes'],
            text: '46L'
        },
        {
            index: '330',
            group: ['suitsizes'],
            text: '34R'
        },
        {
            index: '331',
            group: ['suitsizes'],
            text: '35R'
        }
    ],
    womenfootwear: [
        {
            index: '062',
            group: ['womenfootwear'],
            text: '5 (35.5)'
        },
        {
            index: '063',
            group: ['womenfootwear'],
            text: '5.5 (36)'
        },
        {
            index: '064',
            group: ['womenfootwear'],
            text: '6 (36.5)'
        },
        {
            index: '065',
            group: ['womenfootwear'],
            text: '6.5 (37)'
        },
        {
            index: '066',
            group: ['womenfootwear'],
            text: '7 (37.5)'
        },
        {
            index: '067',
            group: ['womenfootwear'],
            text: '7.5 (38)'
        },
        {
            index: '068',
            group: ['womenfootwear'],
            text: '8 (38.5)'
        },
        {
            index: '069',
            group: ['womenfootwear'],
            text: '8.5 (39)'
        },
        {
            index: '070',
            group: ['womenfootwear'],
            text: '9 (39.5)'
        },
        {
            index: '071',
            group: ['womenfootwear'],
            text: '9.5 (40)'
        },
        {
            index: '072',
            group: ['womenfootwear'],
            text: '10 (40.5)'
        },
        {
            index: '073',
            group: ['womenfootwear'],
            text: '10.5 (41)'
        },
        {
            index: '074',
            group: ['womenfootwear'],
            text: '11 (41.5)'
        },
        {
            index: '075',
            group: ['womenfootwear'],
            text: '11.5 (42)'
        },
        {
            index: '076',
            group: ['womenfootwear'],
            text: '12 (42.5)'
        },
        {
            index: '145',
            group: ['womenfootwear'],
            text: '4 (35)'
        },
        {
            index: '146',
            group: ['womenfootwear'],
            text: '4.5 (35)'
        },
        {
            index: '323',
            group: ['womenfootwear'],
            text: '12.5 (43)'
        },
        {
            index: '324',
            group: ['womenfootwear'],
            text: '13 (43.5)'
        },
        {
            index: '325',
            group: ['womenfootwear'],
            text: '13.5 (44)'
        },
        {
            index: '326',
            group: ['womenfootwear'],
            text: '14 & Up (44.5)'
        }
    ],
    menfootwear: [
        {
            index: '077',
            group: ['menfootwear'],
            text: '12.5 (45.5)'
        },
        {
            index: '078',
            group: ['menfootwear'],
            text: '13 (46)'
        },
        {
            index: '079',
            group: ['menfootwear'],
            text: '13.5 (46.5)'
        },
        {
            index: '080',
            group: ['menfootwear'],
            text: '14 (47)'
        },
        {
            index: '081',
            group: ['menfootwear'],
            text: '14.5 (47.5)'
        },
        {
            index: '082',
            group: ['menfootwear'],
            text: '15 (48)'
        },
        {
            index: '083',
            group: ['menfootwear'],
            text: '15.5 (48.5)'
        },
        {
            index: '084',
            group: ['menfootwear'],
            text: '16 (49)'
        },
        {
            index: '147',
            group: ['menfootwear'],
            text: '6 (39)'
        },
        {
            index: '148',
            group: ['menfootwear'],
            text: '6.5 (39.5)'
        },
        {
            index: '149',
            group: ['menfootwear'],
            text: '7 (40)'
        },
        {
            index: '150',
            group: ['menfootwear'],
            text: '7.5 (40.5)'
        },
        {
            index: '151',
            group: ['menfootwear'],
            text: '8 (41)'
        },
        {
            index: '152',
            group: ['menfootwear'],
            text: '8.5 (41.5)'
        },
        {
            index: '153',
            group: ['menfootwear'],
            text: '9 (42)'
        },
        {
            index: '154',
            group: ['menfootwear'],
            text: '9.5 (42.5)'
        },
        {
            index: '155',
            group: ['menfootwear'],
            text: '10 (43)'
        },
        {
            index: '156',
            group: ['menfootwear'],
            text: '10.5 (43.5)'
        },
        {
            index: '157',
            group: ['menfootwear'],
            text: '11 (44)'
        },
        {
            index: '158',
            group: ['menfootwear'],
            text: '11.5 (44.5)'
        },
        {
            index: '159',
            group: ['menfootwear'],
            text: '12 (45)'
        },
        {
            index: '334',
            group: ['menfootwear'],
            text: '5 (38)'
        },
        {
            index: '335',
            group: ['menfootwear'],
            text: '5.5 (38.5)'
        },
        {
            index: '336',
            group: ['menfootwear'],
            text: '17 (49.5)'
        },
        {
            index: '337',
            group: ['menfootwear'],
            text: '18 (50)'
        },
        {
            index: '338',
            group: ['menfootwear'],
            text: '19 (50.5)'
        },
        {
            index: '339',
            group: ['menfootwear'],
            text: '20 (51)'
        }
    ],
    youthsizes: [
        {
            index: '085',
            group: ['youthsizes'],
            text: '3-6 Months'
        },
        {
            index: '086',
            group: ['youthsizes'],
            text: '6-9 Months'
        },
        {
            index: '087',
            group: ['youthsizes'],
            text: '9-12 Months'
        },
        {
            index: '088',
            group: ['youthsizes'],
            text: 'Newborn'
        },
        {
            index: '089',
            group: ['youthsizes'],
            text: '12-18 Months'
        },
        {
            index: '090',
            group: ['youthsizes'],
            text: '0-3 Months'
        },
        {
            index: '092',
            group: ['youthsizes'],
            text: '24+ Months'
        },
        {
            index: '093',
            group: ['youthsizes'],
            text: 'One Size (Baby)'
        },
        {
            index: '094',
            group: ['youthsizes'],
            text: 'Not Specified (Baby)'
        },
        {
            index: '095',
            group: ['youthsizes'],
            text: '2T'
        },
        {
            index: '096',
            group: ['youthsizes'],
            text: '3T'
        },
        {
            index: '097',
            group: ['youthsizes'],
            text: '4T'
        },
        {
            index: '098',
            group: ['youthsizes'],
            text: '5T'
        },
        {
            index: '099',
            group: ['youthsizes'],
            text: 'One Size (Toddler)'
        },
        {
            index: '100',
            group: ['youthsizes'],
            text: 'Not Specified (Toddler)'
        },
        {
            index: '101',
            group: ['youthsizes'],
            text: 'XS (4-5)'
        },
        {
            index: '102',
            group: ['youthsizes'],
            text: 'S (6-7)'
        },
        {
            index: '103',
            group: ['youthsizes'],
            text: 'M (8)'
        },
        {
            index: '104',
            group: ['youthsizes'],
            text: 'L (10-12)'
        },
        {
            index: '105',
            group: ['youthsizes'],
            text: 'XL (14-16)'
        },
        {
            index: '168',
            group: ['youthsizes'],
            text: '2XL (18)'
        },
        {
            index: '169',
            group: ['youthsizes'],
            text: 'One size'
        }
    ],
    bustsizes: [
        {
            index: '170',
            group: ['bustsizes'],
            text: '32A'
        },
        {
            index: '171',
            group: ['bustsizes'],
            text: '34A'
        },
        {
            index: '172',
            group: ['bustsizes'],
            text: '36A'
        },
        {
            index: '173',
            group: ['bustsizes'],
            text: '38A'
        },
        {
            index: '174',
            group: ['bustsizes'],
            text: '40A'
        },
        {
            index: '175',
            group: ['bustsizes'],
            text: '42A'
        },
        {
            index: '176',
            group: ['bustsizes'],
            text: '44A'
        },
        {
            index: '177',
            group: ['bustsizes'],
            text: '32B'
        },
        {
            index: '178',
            group: ['bustsizes'],
            text: '34B'
        },
        {
            index: '179',
            group: ['bustsizes'],
            text: '36B'
        },
        {
            index: '180',
            group: ['bustsizes'],
            text: '38B'
        },
        {
            index: '181',
            group: ['bustsizes'],
            text: '40B'
        },
        {
            index: '182',
            group: ['bustsizes'],
            text: '42B'
        },
        {
            index: '183',
            group: ['bustsizes'],
            text: '44B'
        },
        {
            index: '184',
            group: ['bustsizes'],
            text: '32C'
        },
        {
            index: '185',
            group: ['bustsizes'],
            text: '34C'
        },
        {
            index: '186',
            group: ['bustsizes'],
            text: '36C'
        },
        {
            index: '187',
            group: ['bustsizes'],
            text: '38C'
        },
        {
            index: '188',
            group: ['bustsizes'],
            text: '40C'
        },
        {
            index: '189',
            group: ['bustsizes'],
            text: '42C'
        },
        {
            index: '190',
            group: ['bustsizes'],
            text: '44C'
        },
        {
            index: '191',
            group: ['bustsizes'],
            text: '32D'
        },
        {
            index: '192',
            group: ['bustsizes'],
            text: '34D'
        },
        {
            index: '193',
            group: ['bustsizes'],
            text: '36D'
        },
        {
            index: '194',
            group: ['bustsizes'],
            text: '38D'
        },
        {
            index: '195',
            group: ['bustsizes'],
            text: '40D'
        },
        {
            index: '196',
            group: ['bustsizes'],
            text: '42D'
        },
        {
            index: '197',
            group: ['bustsizes'],
            text: '44D'
        },
        {
            index: '198',
            group: ['bustsizes'],
            text: '32E (DD)'
        },
        {
            index: '199',
            group: ['bustsizes'],
            text: '34E (DD)'
        },
        {
            index: '200',
            group: ['bustsizes'],
            text: '36E (DD)'
        },
        {
            index: '201',
            group: ['bustsizes'],
            text: '38E (DD)'
        },
        {
            index: '202',
            group: ['bustsizes'],
            text: '40E (DD)'
        },
        {
            index: '203',
            group: ['bustsizes'],
            text: '42E (DD)'
        },
        {
            index: '204',
            group: ['bustsizes'],
            text: '44E (DD)'
        },
        {
            index: '205',
            group: ['bustsizes'],
            text: '32F (DDD)'
        },
        {
            index: '206',
            group: ['bustsizes'],
            text: '34F (DDD)'
        },
        {
            index: '207',
            group: ['bustsizes'],
            text: '36F (DDD)'
        },
        {
            index: '208',
            group: ['bustsizes'],
            text: '38F (DDD)'
        },
        {
            index: '209',
            group: ['bustsizes'],
            text: '40F (DDD)'
        },
        {
            index: '210',
            group: ['bustsizes'],
            text: '42F (DDD)'
        },
        {
            index: '211',
            group: ['bustsizes'],
            text: '44F (DDD)'
        },
        {
            index: '212',
            group: ['bustsizes'],
            text: '32G (4D)'
        },
        {
            index: '213',
            group: ['bustsizes'],
            text: '34G (4D)'
        },
        {
            index: '214',
            group: ['bustsizes'],
            text: '36G (4D)'
        },
        {
            index: '215',
            group: ['bustsizes'],
            text: '38G (4D)'
        },
        {
            index: '216',
            group: ['bustsizes'],
            text: '40G (4D)'
        },
        {
            index: '217',
            group: ['bustsizes'],
            text: '42G (4D)'
        },
        {
            index: '218',
            group: ['bustsizes'],
            text: '44G (4D)'
        },
        {
            index: '219',
            group: ['bustsizes'],
            text: '32H (5D)'
        },
        {
            index: '220',
            group: ['bustsizes'],
            text: '34H (5D)'
        },
        {
            index: '221',
            group: ['bustsizes'],
            text: '36H (5D)'
        },
        {
            index: '222',
            group: ['bustsizes'],
            text: '38H (5D)'
        },
        {
            index: '223',
            group: ['bustsizes'],
            text: '40H (5D)'
        },
        {
            index: '224',
            group: ['bustsizes'],
            text: '42H (5D)'
        },
        {
            index: '225',
            group: ['bustsizes'],
            text: '44H (5D)'
        },
        {
            index: '231',
            group: ['bustsizes'],
            text: '28A'
        },
        {
            index: '232',
            group: ['bustsizes'],
            text: '28B'
        },
        {
            index: '233',
            group: ['bustsizes'],
            text: '28C'
        },
        {
            index: '234',
            group: ['bustsizes'],
            text: '28D'
        },
        {
            index: '235',
            group: ['bustsizes'],
            text: '28E US'
        },
        {
            index: '236',
            group: ['bustsizes'],
            text: '28F US'
        },
        {
            index: '237',
            group: ['bustsizes'],
            text: '28G US'
        },
        {
            index: '238',
            group: ['bustsizes'],
            text: '28H US'
        },
        {
            index: '239',
            group: ['bustsizes'],
            text: '28I US'
        },
        {
            index: '240',
            group: ['bustsizes'],
            text: '28J US'
        },
        {
            index: '241',
            group: ['bustsizes'],
            text: '28K+ US'
        },
        {
            index: '242',
            group: ['bustsizes'],
            text: '30A (XX-Small)'
        },
        {
            index: '243',
            group: ['bustsizes'],
            text: '30B (XX-Small)'
        },
        {
            index: '244',
            group: ['bustsizes'],
            text: '30C (X-Small)'
        },
        {
            index: '245',
            group: ['bustsizes'],
            text: '30D (X-Small)'
        },
        {
            index: '246',
            group: ['bustsizes'],
            text: '30E (30DD US)'
        },
        {
            index: '247',
            group: ['bustsizes'],
            text: '30F (30DDD US)'
        },
        {
            index: '248',
            group: ['bustsizes'],
            text: '30G US'
        },
        {
            index: '249',
            group: ['bustsizes'],
            text: '30H US'
        },
        {
            index: '250',
            group: ['bustsizes'],
            text: '30I US'
        },
        {
            index: '251',
            group: ['bustsizes'],
            text: '30J US'
        },
        {
            index: '252',
            group: ['bustsizes'],
            text: '30K+ US'
        },
        {
            index: '253',
            group: ['bustsizes'],
            text: '32AA'
        },
        {
            index: '254',
            group: ['bustsizes'],
            text: '32I US'
        },
        {
            index: '255',
            group: ['bustsizes'],
            text: '32J US'
        },
        {
            index: '256',
            group: ['bustsizes'],
            text: '32K+ US'
        },
        {
            index: '257',
            group: ['bustsizes'],
            text: '34I US'
        },
        {
            index: '258',
            group: ['bustsizes'],
            text: '34J US'
        },
        {
            index: '259',
            group: ['bustsizes'],
            text: '34K+ US'
        },
        {
            index: '260',
            group: ['bustsizes'],
            text: '36I US'
        },
        {
            index: '261',
            group: ['bustsizes'],
            text: '36J US'
        },
        {
            index: '262',
            group: ['bustsizes'],
            text: '36K+ US'
        },
        {
            index: '263',
            group: ['bustsizes'],
            text: '38I US'
        },
        {
            index: '264',
            group: ['bustsizes'],
            text: '38J US'
        },
        {
            index: '265',
            group: ['bustsizes'],
            text: '38K+ US'
        },
        {
            index: '266',
            group: ['bustsizes'],
            text: '40I US'
        },
        {
            index: '267',
            group: ['bustsizes'],
            text: '40J US'
        },
        {
            index: '268',
            group: ['bustsizes'],
            text: '40K+ US'
        },
        {
            index: '269',
            group: ['bustsizes'],
            text: '42I US'
        },
        {
            index: '270',
            group: ['bustsizes'],
            text: '42J US'
        },
        {
            index: '271',
            group: ['bustsizes'],
            text: '42K+ US'
        },
        {
            index: '275',
            group: ['bustsizes'],
            text: '46B'
        },
        {
            index: '276',
            group: ['bustsizes'],
            text: '46C'
        },
        {
            index: '277',
            group: ['bustsizes'],
            text: '46D'
        },
        {
            index: '278',
            group: ['bustsizes'],
            text: '46E (46DD US)'
        },
        {
            index: '279',
            group: ['bustsizes'],
            text: '46F (46DDD US)'
        },
        {
            index: '280',
            group: ['bustsizes'],
            text: '46G US'
        },
        {
            index: '281',
            group: ['bustsizes'],
            text: '46H US'
        },
        {
            index: '282',
            group: ['bustsizes'],
            text: '46I US'
        },
        {
            index: '283',
            group: ['bustsizes'],
            text: '46J US'
        },
        {
            index: '284',
            group: ['bustsizes'],
            text: '46K+ US'
        },
        {
            index: '285',
            group: ['bustsizes'],
            text: '48C'
        },
        {
            index: '286',
            group: ['bustsizes'],
            text: '48D'
        },
        {
            index: '287',
            group: ['bustsizes'],
            text: '48E (48DD US)'
        },
        {
            index: '288',
            group: ['bustsizes'],
            text: '48F (48DDD US)'
        }
    ]
};

const SizeByGroup = Object.fromEntries(
    Object.entries(SIZES).map(([groupName, values]) => [
        groupName,
        Object.fromEntries(values.map(({ text, index }) => [text, index]))
    ])
);

console.log(JSON.stringify(SizeByGroup, null, '\t'));

export const SizeNatives = {
    womenletter: {
        'XXS (00)': '001',
        'XS (0-2)': '002',
        'S (4-6)': '003',
        'M (8-10)': '004',
        'L (12-14)': '005',
        'XL (16-18)': '006',
        '2XL (20-22)': '007',
        '3XL (24-26)': '160',
        '4XL (28-30)': '161',
        '5XL (32-34)': '162',
        'One Size': '163',
        '1X (16-18)': '289',
        'Petite XXS (0)': '290',
        'Petite XS (0-2)': '291',
        'Petite S (4-6)': '292',
        'Petite M (8-10)': '293',
        'Petite L (12-14)': '294',
        'Petite XL (16-18)': '295',
        'Petite P1X (16-18)': '296',
        'Petite 2XL (20-22)': '297',
        'Petite 3XL (24-26)': '298',
        'Petite 4XL (28-30)': '299',
        'Petite 5XL (32-34)': '300',
        'Maternity XXS (0)': '301',
        'Maternity XS (0-2)': '302',
        'Maternity S (4-6)': '303',
        'Maternity M (8-10)': '304',
        'Maternity L (12-14)': '305',
        'Maternity XL (16-18)': '306',
        'Maternity P1X (16-18)': '307',
        'Maternity 2XL (20-22)': '308',
        'Maternity 3XL (24-26)': '309',
        'Maternity 4XL (28-30)': '310',
        'Maternity 5XL (32-34)': '311',
        'Tall XXS (0)': '312',
        'Tall XS (0-2)': '313',
        'Tall S (4-6)': '314',
        'Tall M (8-10)': '315',
        'Tall L (12-14)': '316',
        'Tall XL (16-18)': '317',
        'Tall P1X (16-18)': '318',
        'Tall 2XL (20-22)': '319',
        'Tall 3XL (24-26)': '320',
        'Tall 4XL (28-30)': '321',
        'Tall 5XL (32-34)': '322',
        'Juniors: XS (0-1)': '351',
        'Juniors: S (3-5)': '352',
        'Juniors: M (7-9)': '353',
        'Juniors: L (11-13)': '354',
        'Juniors: XL (15-17)': '355'
    } as const,
    menletter: {
        'XS (30-32)': '008',
        'S (34-36)': '009',
        'M (38-40)': '010',
        'L (42-44)': '011',
        'XL (46-48)': '012',
        'XXL (50-52)': '013',
        '3XL (54-56)': '164',
        '4XL (58-60)': '165',
        '5XL (62-64)': '166',
        'One size [Mens]': '167',
        'Tall 4XL (58-60)': '332',
        'Tall 5XL (62-64)': '333',
        'Tall M': '340',
        'Tall L': '341',
        'Tall XL': '342',
        'Tall XXL': '343',
        'Tall XXXL+': '344',
        'Big 1X': '345',
        'Big 2X': '346',
        'Big 3X': '347',
        'Big 4X': '348'
    } as const,
    waistsizes: {
        '23 in': '014',
        '24 in': '015',
        '25 in': '016',
        '26 in': '017',
        '27 in': '018',
        '28 in': '019',
        '29 in': '020',
        '30 in': '021',
        '31 in': '022',
        '32 in': '023',
        '33 in': '024',
        '34 in': '025',
        '36 in': '026',
        '38 in': '027',
        '40 in': '028',
        '42 in': '029',
        '44 in': '030',
        '46 in': '031',
        '48 in': '032',
        '50 in': '033',
        '52 in': '034',
        '54 in': '327',
        '56 in': '328',
        '58+ in': '329'
    } as const,
    suitsizes: {
        '38S': '035',
        '40S': '036',
        '42S': '037',
        '44S': '038',
        '48S': '039',
        '50S': '040',
        '52S': '041',
        '54S': '042',
        '56S': '043',
        '38R': '044',
        '40R': '045',
        '42R': '046',
        '44R': '047',
        '48R': '048',
        '50R': '049',
        '52R': '050',
        '54R': '051',
        '56R': '052',
        '38L': '053',
        '40L': '054',
        '42L': '055',
        '44L': '056',
        '48L': '057',
        '50L': '058',
        '52L': '059',
        '54L': '060',
        '56L': '061',
        '36S': '226',
        '36R': '227',
        '46S': '228',
        '46R': '229',
        '46L': '230',
        '34R': '330',
        '35R': '331'
    } as const,
    womenfootwear: {
        '5 (35.5)': '062',
        '5.5 (36)': '063',
        '6 (36.5)': '064',
        '6.5 (37)': '065',
        '7 (37.5)': '066',
        '7.5 (38)': '067',
        '8 (38.5)': '068',
        '8.5 (39)': '069',
        '9 (39.5)': '070',
        '9.5 (40)': '071',
        '10 (40.5)': '072',
        '10.5 (41)': '073',
        '11 (41.5)': '074',
        '11.5 (42)': '075',
        '12 (42.5)': '076',
        '4 (35)': '145',
        '4.5 (35)': '146',
        '12.5 (43)': '323',
        '13 (43.5)': '324',
        '13.5 (44)': '325',
        '14 & Up (44.5)': '326'
    } as const,
    menfootwear: {
        '12.5 (45.5)': '077',
        '13 (46)': '078',
        '13.5 (46.5)': '079',
        '14 (47)': '080',
        '14.5 (47.5)': '081',
        '15 (48)': '082',
        '15.5 (48.5)': '083',
        '16 (49)': '084',
        '6 (39)': '147',
        '6.5 (39.5)': '148',
        '7 (40)': '149',
        '7.5 (40.5)': '150',
        '8 (41)': '151',
        '8.5 (41.5)': '152',
        '9 (42)': '153',
        '9.5 (42.5)': '154',
        '10 (43)': '155',
        '10.5 (43.5)': '156',
        '11 (44)': '157',
        '11.5 (44.5)': '158',
        '12 (45)': '159',
        '5 (38)': '334',
        '5.5 (38.5)': '335',
        '17 (49.5)': '336',
        '18 (50)': '337',
        '19 (50.5)': '338',
        '20 (51)': '339'
    } as const,
    youthsizes: {
        '3-6 Months': '085',
        '6-9 Months': '086',
        '9-12 Months': '087',
        Newborn: '088',
        '12-18 Months': '089',
        '0-3 Months': '090',
        '24+ Months': '092',
        'One Size (Baby)': '093',
        'Not Specified (Baby)': '094',
        '2T': '095',
        '3T': '096',
        '4T': '097',
        '5T': '098',
        'One Size (Toddler)': '099',
        'Not Specified (Toddler)': '100',
        'XS (4-5)': '101',
        'S (6-7)': '102',
        'M (8)': '103',
        'L (10-12)': '104',
        'XL (14-16)': '105',
        '2XL (18)': '168',
        'One size': '169'
    } as const,
    bustsizes: {
        '32A': '170',
        '34A': '171',
        '36A': '172',
        '38A': '173',
        '40A': '174',
        '42A': '175',
        '44A': '176',
        '32B': '177',
        '34B': '178',
        '36B': '179',
        '38B': '180',
        '40B': '181',
        '42B': '182',
        '44B': '183',
        '32C': '184',
        '34C': '185',
        '36C': '186',
        '38C': '187',
        '40C': '188',
        '42C': '189',
        '44C': '190',
        '32D': '191',
        '34D': '192',
        '36D': '193',
        '38D': '194',
        '40D': '195',
        '42D': '196',
        '44D': '197',
        '32E (DD)': '198',
        '34E (DD)': '199',
        '36E (DD)': '200',
        '38E (DD)': '201',
        '40E (DD)': '202',
        '42E (DD)': '203',
        '44E (DD)': '204',
        '32F (DDD)': '205',
        '34F (DDD)': '206',
        '36F (DDD)': '207',
        '38F (DDD)': '208',
        '40F (DDD)': '209',
        '42F (DDD)': '210',
        '44F (DDD)': '211',
        '32G (4D)': '212',
        '34G (4D)': '213',
        '36G (4D)': '214',
        '38G (4D)': '215',
        '40G (4D)': '216',
        '42G (4D)': '217',
        '44G (4D)': '218',
        '32H (5D)': '219',
        '34H (5D)': '220',
        '36H (5D)': '221',
        '38H (5D)': '222',
        '40H (5D)': '223',
        '42H (5D)': '224',
        '44H (5D)': '225',
        '28A': '231',
        '28B': '232',
        '28C': '233',
        '28D': '234',
        '28E US': '235',
        '28F US': '236',
        '28G US': '237',
        '28H US': '238',
        '28I US': '239',
        '28J US': '240',
        '28K+ US': '241',
        '30A (XX-Small)': '242',
        '30B (XX-Small)': '243',
        '30C (X-Small)': '244',
        '30D (X-Small)': '245',
        '30E (30DD US)': '246',
        '30F (30DDD US)': '247',
        '30G US': '248',
        '30H US': '249',
        '30I US': '250',
        '30J US': '251',
        '30K+ US': '252',
        '32AA': '253',
        '32I US': '254',
        '32J US': '255',
        '32K+ US': '256',
        '34I US': '257',
        '34J US': '258',
        '34K+ US': '259',
        '36I US': '260',
        '36J US': '261',
        '36K+ US': '262',
        '38I US': '263',
        '38J US': '264',
        '38K+ US': '265',
        '40I US': '266',
        '40J US': '267',
        '40K+ US': '268',
        '42I US': '269',
        '42J US': '270',
        '42K+ US': '271',
        '46B': '275',
        '46C': '276',
        '46D': '277',
        '46E (46DD US)': '278',
        '46F (46DDD US)': '279',
        '46G US': '280',
        '46H US': '281',
        '46I US': '282',
        '46J US': '283',
        '46K+ US': '284',
        '48C': '285',
        '48D': '286',
        '48E (48DD US)': '287',
        '48F (48DDD US)': '288'
    } as const
} as const;

export const WomensLetterEnum = z.nativeEnum(SizeNatives.womenletter);
export const MensLetterEnum = z.nativeEnum(SizeNatives.menletter);
export const BustSizesEnum = z.nativeEnum(SizeNatives.bustsizes);
export const WaistSizesEnum = z.nativeEnum(SizeNatives.waistsizes);
export const SuitSizesEnum = z.nativeEnum(SizeNatives.suitsizes);
export const YouthSizesEnum = z.nativeEnum(SizeNatives.youthsizes);
export const MensFootwearEnum = z.nativeEnum(SizeNatives.menfootwear);
export const WomensFootwearEnum = z.nativeEnum(SizeNatives.womenfootwear);

