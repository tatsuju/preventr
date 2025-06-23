// PREVENT™ 完整係數 - 10年和30年模型
// 從 preventr_data.json 提取

const PREVENT_COMPLETE_COEFFICIENTS = {
    // 10年基礎模型
    base_10yr: {
        'Age, per 10 years': {
            female_cvd: 0.7939329,
            male_cvd: 0.7688528,
            female_ascvd: 0.719883,
            male_ascvd: 0.7099847,
            female_hf: 0.8998235,
            male_hf: 0.8972642
        },
        'non-HDL-C per 1 mmol/L': {
            female_cvd: 0.0305239,
            male_cvd: 0.0736174,
            female_ascvd: 0.1176967,
            male_ascvd: 0.1658663,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'HDL-C per 0.3 mmol/L': {
            female_cvd: -0.1606857,
            male_cvd: -0.0954431,
            female_ascvd: -0.151185,
            male_ascvd: -0.1144285,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'SBP <110 per 20 mmHg': {
            female_cvd: -0.2394003,
            male_cvd: -0.4347345,
            female_ascvd: -0.0835358,
            male_ascvd: -0.2837212,
            female_hf: -0.4559771,
            male_hf: -0.6811466
        },
        'SBP ≥110 per 20 mmHg': {
            female_cvd: 0.3600781,
            male_cvd: 0.3362658,
            female_ascvd: 0.3592852,
            male_ascvd: 0.3239977,
            female_hf: 0.3576505,
            male_hf: 0.3634461
        },
        'Diabetes': {
            female_cvd: 0.8667604,
            male_cvd: 0.7692857,
            female_ascvd: 0.8348585,
            male_ascvd: 0.7189597,
            female_hf: 1.038346,
            male_hf: 0.923776
        },
        'Current smoking': {
            female_cvd: 0.5360739,
            male_cvd: 0.4386871,
            female_ascvd: 0.4831078,
            male_ascvd: 0.3956973,
            female_hf: 0.583916,
            male_hf: 0.5023736
        },
        'BMI <30, per 5 kg/m2': {
            female_cvd: 0.0,
            male_cvd: 0.0,
            female_ascvd: 0.0,
            male_ascvd: 0.0,
            female_hf: -0.0072294,
            male_hf: -0.0485841
        },
        'BMI 30+, per 5 kg/m2': {
            female_cvd: 0.0,
            male_cvd: 0.0,
            female_ascvd: 0.0,
            male_ascvd: 0.0,
            female_hf: 0.2997706,
            male_hf: 0.3726929
        },
        'eGFR <60, per -15 ml': {
            female_cvd: 0.6045917,
            male_cvd: 0.5378979,
            female_ascvd: 0.4864619,
            male_ascvd: 0.3690075,
            female_hf: 0.7451638,
            male_hf: 0.6926917
        },
        'eGFR 60+, per -15 ml': {
            female_cvd: 0.0433769,
            male_cvd: 0.0164827,
            female_ascvd: 0.0397779,
            male_ascvd: 0.0203619,
            female_hf: 0.0557087,
            male_hf: 0.0251827
        },
        'Anti-hypertensive use': {
            female_cvd: 0.3151672,
            male_cvd: 0.288879,
            female_ascvd: 0.2265309,
            male_ascvd: 0.2036522,
            female_hf: 0.3534442,
            male_hf: 0.2980922
        },
        'Statin use': {
            female_cvd: -0.1477655,
            male_cvd: -0.1337349,
            female_ascvd: -0.0592374,
            male_ascvd: -0.0865581,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'Treated SBP ≥110 mm Hg per 20 mm Hg': {
            female_cvd: -0.0663612,
            male_cvd: -0.0475924,
            female_ascvd: -0.0395762,
            male_ascvd: -0.0322916,
            female_hf: -0.0981511,
            male_hf: -0.0497731
        },
        'Treated non-HDL-C': {
            female_cvd: 0.1197879,
            male_cvd: 0.150273,
            female_ascvd: 0.0844423,
            male_ascvd: 0.114563,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'Age per 10yr * non-HDL-C per 1 mmol/L': {
            female_cvd: -0.0819715,
            male_cvd: -0.0517874,
            female_ascvd: -0.0567839,
            male_ascvd: -0.0300005,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'Age per 10yr * HDL-C per 1 mml/L': {
            female_cvd: 0.0306769,
            male_cvd: 0.0191169,
            female_ascvd: 0.0325692,
            male_ascvd: 0.0232747,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'Age per 10yr * SBP ≥110 mm Hg per 20 mmHg': {
            female_cvd: -0.0946348,
            male_cvd: -0.1049477,
            female_ascvd: -0.1035985,
            male_ascvd: -0.0927024,
            female_hf: -0.0946663,
            male_hf: -0.1289201
        },
        'Age per 10yr * diabetes': {
            female_cvd: -0.27057,
            male_cvd: -0.2251948,
            female_ascvd: -0.2417542,
            male_ascvd: -0.2018525,
            female_hf: -0.3581041,
            male_hf: -0.3040924
        },
        'Age per 10yr * current smoking': {
            female_cvd: -0.078715,
            male_cvd: -0.0895067,
            female_ascvd: -0.0791142,
            male_ascvd: -0.0970527,
            female_hf: -0.1159453,
            male_hf: -0.1401688
        },
        'Age per 10yr * BMI 30+ per 5 kg/m2': {
            female_cvd: 0.0,
            male_cvd: 0.0,
            female_ascvd: 0.0,
            male_ascvd: 0.0,
            female_hf: -0.003878,
            male_hf: 0.0068126
        },
        'Age per 10yr * eGFR <60, per -15 ml': {
            female_cvd: -0.1637806,
            male_cvd: -0.1543702,
            female_ascvd: -0.1671492,
            male_ascvd: -0.1217081,
            female_hf: -0.1884289,
            male_hf: -0.1797778
        },
        'Constant': {
            female_cvd: -3.307728,
            male_cvd: -3.031168,
            female_ascvd: -3.819975,
            male_ascvd: -3.500655,
            female_hf: -4.310409,
            male_hf: -3.946391
        },
    },

    // 30年基礎模型
    base_30yr: {
        'Age, 10 years': {
            female_cvd: 0.5503079,
            male_cvd: 0.4627309,
            female_ascvd: 0.4669202,
            male_ascvd: 0.3994099,
            female_hf: 0.6254374,
            male_hf: 0.5681541
        },
        'Age squared': {
            female_cvd: -0.0928369,
            male_cvd: -0.0984281,
            female_ascvd: -0.0893118,
            male_ascvd: -0.0937484,
            female_hf: -0.0983038,
            male_hf: -0.1048388
        },
        'non-HDL-C per 1 mmol/L': {
            female_cvd: 0.0409794,
            male_cvd: 0.0836088,
            female_ascvd: 0.1256901,
            male_ascvd: 0.1744643,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'HDL-C per 0.3 mmol/L': {
            female_cvd: -0.1663306,
            male_cvd: -0.1029824,
            female_ascvd: -0.1542255,
            male_ascvd: -0.120203,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'SBP <110 per 20 mmHg': {
            female_cvd: -0.1628654,
            male_cvd: -0.2140352,
            female_ascvd: -0.0018093,
            male_ascvd: -0.0665117,
            female_hf: -0.3919241,
            male_hf: -0.4761564
        },
        'SBP ≥110 per 20 mmHg': {
            female_cvd: 0.3299505,
            male_cvd: 0.2904325,
            female_ascvd: 0.322949,
            male_ascvd: 0.2753037,
            female_hf: 0.3142295,
            male_hf: 0.30324
        },
        'Diabetes': {
            female_cvd: 0.6793894,
            male_cvd: 0.5331276,
            female_ascvd: 0.6296707,
            male_ascvd: 0.4790257,
            female_hf: 0.8330787,
            male_hf: 0.6840338
        },
        'Current smoking': {
            female_cvd: 0.3196112,
            male_cvd: 0.2141914,
            female_ascvd: 0.268292,
            male_ascvd: 0.1782635,
            female_hf: 0.3438651,
            male_hf: 0.2656273
        },
        'BMI <30, per 5 kg/m2': {
            female_cvd: 0.0,
            male_cvd: 0.0,
            female_ascvd: 0.0,
            male_ascvd: 0.0,
            female_hf: 0.0594874,
            male_hf: 0.0833107
        },
        'BMI 30+, per 5 kg/m2': {
            female_cvd: 0.0,
            male_cvd: 0.0,
            female_ascvd: 0.0,
            male_ascvd: 0.0,
            female_hf: 0.2525536,
            male_hf: 0.26999
        },
        'eGFR <60, per -15 ml': {
            female_cvd: 0.1857101,
            male_cvd: 0.1155556,
            female_ascvd: 0.100106,
            male_ascvd: -0.0218789,
            female_hf: 0.2981642,
            male_hf: 0.2541805
        },
        'eGFR 60+, per -15 ml': {
            female_cvd: 0.0553528,
            male_cvd: 0.0603775,
            female_ascvd: 0.0499663,
            male_ascvd: 0.0602553,
            female_hf: 0.0667159,
            male_hf: 0.0638923
        },
        'Anti-hypertensive use': {
            female_cvd: 0.2894,
            male_cvd: 0.232714,
            female_ascvd: 0.1875292,
            male_ascvd: 0.1421182,
            female_hf: 0.333921,
            male_hf: 0.2583631
        },
        'Statin use': {
            female_cvd: -0.075688,
            male_cvd: -0.0272112,
            female_ascvd: 0.0152476,
            male_ascvd: 0.0135996,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'Treated SBP ≥110 mm Hg per 20 mm Hg': {
            female_cvd: -0.056367,
            male_cvd: -0.0384488,
            female_ascvd: -0.0276123,
            male_ascvd: -0.0218265,
            female_hf: -0.0893177,
            male_hf: -0.0391938
        },
        'Treated non-HDL-C': {
            female_cvd: 0.1071019,
            male_cvd: 0.134192,
            female_ascvd: 0.0736147,
            male_ascvd: 0.1013148,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'Age per 10yr * non-HDL-C per 1 mmol/L': {
            female_cvd: -0.0751438,
            male_cvd: -0.0511759,
            female_ascvd: -0.0521962,
            male_ascvd: -0.0312619,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'Age per 10yr * HDL-C per 1 mml/L': {
            female_cvd: 0.0301786,
            male_cvd: 0.0165865,
            female_ascvd: 0.0316918,
            male_ascvd: 0.020673,
            female_hf: 0.0,
            male_hf: 0.0
        },
        'Age per 10yr * SBP ≥110 mm Hg per 20 mmHg': {
            female_cvd: -0.0998776,
            male_cvd: -0.1101437,
            female_ascvd: -0.1046101,
            male_ascvd: -0.0920935,
            female_hf: -0.0974299,
            male_hf: -0.1269124
        },
        'Age per 10yr * diabetes': {
            female_cvd: -0.3206166,
            male_cvd: -0.2585943,
            female_ascvd: -0.2727793,
            male_ascvd: -0.2159947,
            female_hf: -0.404855,
            male_hf: -0.3273572
        },
        'Age per 10yr * current smoking': {
            female_cvd: -0.1607862,
            male_cvd: -0.1566406,
            female_ascvd: -0.1530907,
            male_ascvd: -0.1548811,
            female_hf: -0.1982991,
            male_hf: -0.2043019
        },
        'Age per 10yr * BMI 30+ per 5 kg/m2': {
            female_cvd: 0.0,
            male_cvd: 0.0,
            female_ascvd: 0.0,
            male_ascvd: 0.0,
            female_hf: -0.0035619,
            male_hf: -0.0182831
        },
        'Age per 10yr * eGFR <60, per -15 ml': {
            female_cvd: -0.1450788,
            male_cvd: -0.1166776,
            female_ascvd: -0.1299149,
            male_ascvd: -0.0712547,
            female_hf: -0.1564215,
            male_hf: -0.1342618
        },
        'Constant': {
            female_cvd: -1.318827,
            male_cvd: -1.148204,
            female_ascvd: -1.974074,
            male_ascvd: -1.736444,
            female_hf: -2.205379,
            male_hf: -1.95751
        },
    }
};
