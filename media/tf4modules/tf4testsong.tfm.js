var tf_synthcount = 9;
var tf_tempo = 100;
var tf_instruments = [
[0.538061, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.0909091, 0.919192, 0, 0, 0, 0, 0, 0, 0, 0, 0.0609756, 0, 0.191919, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.214286, 0.5, 0.282051, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.191919, 0.2, 0.2, 0.191919, 0.191919, 0.191919, 0.115919, 0.191919, 0.482949, 0.494949, 0.2, 0.2, 0.2, 0.5, 1, 0, 0, 0.5, 0.5, 0.5, 0, 0, 0, 0.5, 0.5, 0, 0.5, 0.5],
[0.301737, 0.228, 0.387596, 0.0909091, 0.164, 1, 0.5, 0.5, 0.375, 0, 0.2, 0, 1, 0.08901, 0.222222, 0.280848, 0, 0, 0, 0, 1, 0.5, 0, 0, 0, 0, 0, 0.243902, 0.121951, 0.378049, 1, 0, 0.609756, 0, 0.560976, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0.214286, 0.5, 0.128205, 0.285714, 0.5, 0.307692, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.2, 0.2, 0.317535, 0.311232, 0.689253, 0.456, 0.02, 0.212, 0.984, 0.2, 0.2, 0.2, 0.5, 1, 0, 1, 0.5, 0.5, 0.5, 0, 0, 0, 0.5, 0.5, 0, 0.5, 0.5],
[0.494949, 0.268, 1, 0.0909091, 0, 1, 0.5, 0.5, 0.75, 0, 0.181818, 0, 1, 0.0808081, 0.333333, 0.137333, 0.0606061, 0, 0, 0, 1, 0.410061, 0.040404, 0, 0, 0, 0, 0.262626, 0.262626, 0.717172, 0.597561, 0, 0.565657, 0, 0.808081, 0.949495, 0, 0, 0, 0, 0, 0, 0, 0, 0.285714, 0.5, 0.128205, 0.214286, 0.5, 0.307692, 0.214286, 0.5, 0.0769231, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.444444, 0.2, 0.2, 0.454545, 0.464646, 0.676768, 0.79798, 1, 0.252525, 1, 0.2, 0.2, 0.2, 0.5, 1, 0, 1, 0.5, 0.5, 0.5, 0, 0, 0, 0.5, 0.5, 0, 0.5, 0.5],
[0.267919, 0.767677, 0.252525, 0, 0, 1, 0.5, 0.050505, 0.375, 0, 0.181818, 0, 1, 0, 0.777778, 0.377859, 0, 0, 0, 0, 1, 0.764646, 0, 0, 0, 0, 0, 0.426829, 0.10101, 0.717172, 1, 0.262626, 0.373737, 0, 0.0606061, 0.949495, 0.096, 0.584, 0, 0, 0, 0, 0, 0, 0.285714, 0.5, 0.128205, 0.214286, 0.5, 0.307692, 0.0714286, 0.5, 0.307692, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0.444444, 0.131313, 0.252525, 0.45415, 0.45415, 0.656566, 0.717172, 0.565657, 0.10101, 1, 0.2, 0.2, 0.2, 0.5, 0.50505, 0, 1, 0.242424, 0.484848, 0.494949, 0, 0, 0, 0.5, 0.5, 0, 0.5, 0.5],
[0.248929, 0.312687, 0.040404, 0, 0, 0.494949, 0.5, 0.0808081, 0.5, 0, 0.181818, 0, 0.333333, 0.190707, 0.888889, 0.367354, 0, 0, 0, 0, 1, 0.858586, 0, 0, 0, 0, 0, 0.373737, 0.232323, 0.212121, 1, 0, 0.333333, 0, 0.181818, 0.949495, 0, 0, 0, 0, 0, 0, 0, 0, 0.285714, 0.5, 0.128205, 0.214286, 0.5, 0.307692, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.5, 0, 0, 0, 0, 0, 0, 0, 0.20202, 0.2, 0.2, 0.383838, 0.383838, 0.626263, 0.515152, 1, 0.242424, 1, 0.222222, 0.050505, 0.585859, 0.565657, 1, 0, 1, 0.5, 0.5, 0.606061, 0, 0, 0, 0.5, 0.5, 0, 0.5, 0.5],
[0.153131, 0.575758, 0.24598, 0.0909091, 0.203919, 1, 0.5, 0.050505, 0.375, 0, 0.191919, 0, 1, 0.474747, 1, 0.467758, 0, 0, 0, 0, 1, 0.79798, 0.0909091, 0, 0, 0, 0, 0.52439, 0.597561, 0.474747, 1, 0, 0.780488, 0.560976, 0.676768, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0.214286, 0.5, 0.128205, 0.285714, 0.5, 0.307692, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.1, 0.2, 0, 0, 0, 0, 0, 0, 0, 0.191919, 0.191919, 0.191919, 0.454545, 0.454545, 0.381576, 0.59596, 0.191919, 0.242424, 0.979798, 0.2, 0.2, 0.2, 0.494949, 1, 0, 0, 0.494949, 0.494949, 0.494949, 0, 0, 0, 0.5, 0.5, 0, 0.5, 0.5],
[0.800566, 0.020202, 0.010101, 0.0909091, 0, 1, 0.515152, 0.5, 0.75, 0, 0.151515, 0.444444, 1, 0.010101, 0, 0.292929, 0, 0.105939, 0.282828, 0.160323, 1, 0.252525, 0.0909091, 0, 0, 0, 0, 0.030303, 0.272727, 0.191919, 0, 0, 0.292929, 0, 0.232323, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0.214286, 0.5, 0.153846, 0.285714, 0.5, 0.128205, 0.285714, 0.5, 0.282051, 0.285714, 0.5, 0.307692, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0.363636, 0.2, 0.2, 0.2, 0.2, 0.2, 0.323232, 0.2, 0.151515, 0.5, 0.2, 0.2, 0.2, 0.5, 1, 0, 0, 0.5, 0.5, 0.5, 0, 0, 0, 0.5, 0.5, 0, 0.5, 0.5],
[0.454545, 0.515152, 0.0606061, 0.0909091, 0, 0.989899, 0.5, 0.5, 0.375, 0, 0.191919, 0.30303, 1, 0, 0, 0.292929, 0.050505, 0.292929, 0.292929, 0.323232, 0, 0, 0, 1, 0.121212, 0.717172, 0, 0.219512, 0.121212, 0.191919, 0, 0, 0.0365854, 0, 0.191919, 0.424242, 0, 0, 0, 0, 0, 0, 0, 0, 0.214286, 0.5, 0.153846, 0.285714, 0.5, 0.128205, 0.285714, 0.5, 0.282051, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.5, 0.7, 0, 0, 0, 0, 0, 0, 0, 0.222222, 0.2, 0.2, 0.2, 0.2, 0.2, 0.333333, 0.989899, 0.292929, 0.959596, 0.2, 0.2, 0.2, 0.5, 1, 0, 0, 0.575758, 0.666667, 0.777778, 0, 0, 0, 0.5, 0.5, 0, 0.5, 0.5],
[0.5, 0, 0, 0, 0, 1, 0.5, 0.5, 0.5, 0, 0.2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.672, 1, 0.5, 1, 0, 0, 0, 0, 0.0714286, 0.5, 0.128205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.5, 0.5, 0.2, 0.2, 0.2, 0.5, 1, 0, 1, 0.5, 0.5, 0.5, 0, 0, 0, 0.5, 0.5, 0, 0.5, 0.5],
];
var tf_song = [
[0, 1, 41, 127],
[0, 3, 41, 127],
[0, 0, 44, 127],
[1, 1, 41, 0],
[1, 3, 41, 0],
[1, 3, 53, 127],
[2, 0, 44, 0],
[2, 1, 41, 127],
[2, 0, 44, 127],
[3, 1, 41, 0],
[3, 1, 41, 127],
[3, 3, 53, 0],
[3, 3, 41, 127],
[4, 3, 41, 0],
[4, 3, 53, 127],
[4, 1, 41, 0],
[4, 1, 53, 127],
[4, 0, 44, 0],
[4, 0, 46, 127],
[5, 0, 46, 0],
[5, 0, 44, 127],
[5, 1, 53, 0],
[7, 1, 41, 127],
[8, 1, 41, 0],
[8, 1, 58, 127],
[8, 3, 53, 0],
[8, 3, 41, 127],
[8, 0, 44, 0],
[8, 0, 44, 127],
[9, 3, 41, 0],
[9, 3, 53, 127],
[11, 3, 53, 0],
[11, 0, 44, 0],
[11, 3, 41, 127],
[11, 0, 44, 127],
[11, 1, 58, 0],
[11, 1, 41, 127],
[12, 0, 44, 0],
[12, 0, 46, 127],
[12, 3, 41, 0],
[12, 3, 53, 127],
[12, 1, 41, 0],
[12, 1, 57, 127],
[15, 0, 46, 0],
[15, 0, 46, 127],
[15, 1, 57, 0],
[15, 1, 41, 127],
[16, 0, 46, 0],
[16, 0, 44, 127],
[16, 1, 41, 0],
[16, 1, 41, 127],
[16, 3, 53, 0],
[16, 3, 36, 127],
[17, 1, 41, 0],
[17, 3, 36, 0],
[17, 3, 48, 127],
[18, 1, 41, 127],
[18, 0, 44, 0],
[18, 0, 44, 127],
[19, 3, 48, 0],
[19, 1, 41, 0],
[19, 3, 36, 127],
[19, 1, 41, 127],
[20, 3, 36, 0],
[20, 3, 48, 127],
[20, 1, 41, 0],
[20, 0, 44, 0],
[20, 0, 46, 127],
[20, 1, 53, 127],
[21, 0, 46, 0],
[21, 0, 44, 127],
[21, 1, 53, 0],
[23, 1, 41, 127],
[24, 0, 44, 0],
[24, 0, 44, 127],
[24, 1, 41, 0],
[24, 3, 48, 0],
[24, 3, 36, 127],
[24, 1, 48, 127],
[25, 3, 36, 0],
[25, 3, 48, 127],
[27, 1, 48, 0],
[27, 0, 44, 0],
[27, 1, 41, 127],
[27, 0, 44, 127],
[27, 3, 48, 0],
[27, 3, 36, 127],
[28, 3, 36, 0],
[28, 0, 44, 0],
[28, 3, 48, 127],
[28, 0, 46, 127],
[28, 1, 41, 0],
[28, 1, 51, 127],
[31, 1, 51, 0],
[31, 0, 46, 0],
[31, 1, 41, 127],
[31, 0, 46, 127],
[32, 1, 41, 0],
[32, 1, 41, 127],
[32, 3, 48, 0],
[32, 0, 46, 0],
[32, 0, 44, 127],
[32, 3, 39, 127],
[33, 1, 41, 0],
[33, 3, 39, 0],
[33, 3, 51, 127],
[34, 0, 44, 0],
[34, 0, 44, 127],
[34, 1, 41, 127],
[35, 1, 41, 0],
[35, 1, 41, 127],
[35, 3, 51, 0],
[35, 3, 39, 127],
[36, 1, 41, 0],
[36, 0, 44, 0],
[36, 1, 53, 127],
[36, 0, 46, 127],
[36, 3, 39, 0],
[36, 3, 51, 127],
[37, 1, 53, 0],
[37, 0, 46, 0],
[37, 0, 44, 127],
[39, 1, 41, 127],
[40, 3, 51, 0],
[40, 0, 44, 0],
[40, 3, 39, 127],
[40, 0, 44, 127],
[40, 1, 41, 0],
[40, 1, 58, 127],
[41, 3, 39, 0],
[41, 3, 51, 127],
[43, 0, 44, 0],
[43, 0, 44, 127],
[43, 1, 58, 0],
[43, 1, 41, 127],
[43, 3, 51, 0],
[43, 3, 39, 127],
[44, 0, 44, 0],
[44, 0, 46, 127],
[44, 1, 41, 0],
[44, 1, 57, 127],
[44, 3, 39, 0],
[44, 3, 51, 127],
[47, 1, 57, 0],
[47, 1, 41, 127],
[47, 0, 46, 0],
[47, 0, 46, 127],
[48, 0, 46, 0],
[48, 0, 44, 127],
[48, 1, 41, 0],
[48, 1, 41, 127],
[48, 3, 51, 0],
[48, 3, 38, 127],
[49, 1, 41, 0],
[49, 3, 38, 0],
[49, 3, 50, 127],
[50, 1, 41, 127],
[50, 0, 44, 0],
[50, 0, 44, 127],
[51, 3, 50, 0],
[51, 3, 38, 127],
[51, 1, 41, 0],
[51, 1, 41, 127],
[52, 3, 38, 0],
[52, 3, 50, 127],
[52, 0, 44, 0],
[52, 0, 46, 127],
[52, 1, 41, 0],
[52, 1, 53, 127],
[53, 0, 46, 0],
[53, 0, 44, 127],
[53, 1, 53, 0],
[55, 1, 41, 127],
[56, 0, 44, 0],
[56, 0, 44, 127],
[56, 3, 50, 0],
[56, 3, 38, 127],
[56, 1, 41, 0],
[56, 1, 48, 127],
[57, 3, 38, 0],
[57, 3, 50, 127],
[59, 1, 48, 0],
[59, 0, 44, 0],
[59, 3, 50, 0],
[59, 1, 41, 127],
[59, 3, 38, 127],
[59, 0, 44, 127],
[60, 1, 41, 0],
[60, 0, 44, 0],
[60, 0, 46, 127],
[60, 1, 51, 127],
[60, 3, 38, 0],
[60, 3, 50, 127],
[63, 1, 51, 0],
[63, 0, 46, 0],
[63, 0, 46, 127],
[63, 1, 41, 127],
[64, 1, 41, 0],
[64, 0, 46, 0],
[64, 3, 50, 0],
[64, 3, 41, 127],
[64, 0, 44, 127],
[64, 1, 41, 127],
[65, 3, 41, 0],
[65, 3, 53, 127],
[65, 1, 41, 0],
[66, 1, 41, 127],
[66, 0, 44, 0],
[66, 0, 44, 127],
[67, 3, 53, 0],
[67, 1, 41, 0],
[67, 3, 41, 127],
[67, 1, 41, 127],
[68, 3, 41, 0],
[68, 3, 53, 127],
[68, 1, 41, 0],
[68, 0, 44, 0],
[68, 0, 46, 127],
[68, 1, 53, 127],
[69, 1, 53, 0],
[69, 0, 46, 0],
[69, 0, 44, 127],
[71, 1, 41, 127],
[72, 1, 41, 0],
[72, 0, 44, 0],
[72, 3, 53, 0],
[72, 3, 41, 127],
[72, 0, 44, 127],
[72, 1, 58, 127],
[73, 3, 41, 0],
[73, 3, 53, 127],
[75, 3, 53, 0],
[75, 3, 41, 127],
[75, 0, 44, 0],
[75, 0, 44, 127],
[75, 1, 58, 0],
[75, 1, 41, 127],
[76, 3, 41, 0],
[76, 1, 41, 0],
[76, 0, 44, 0],
[76, 0, 46, 127],
[76, 3, 53, 127],
[76, 1, 57, 127],
[79, 1, 57, 0],
[79, 1, 41, 127],
[79, 0, 46, 0],
[79, 0, 46, 127],
[80, 3, 53, 0],
[80, 1, 41, 0],
[80, 0, 46, 0],
[80, 1, 41, 127],
[80, 0, 44, 127],
[80, 3, 36, 127],
[81, 3, 36, 0],
[81, 3, 48, 127],
[81, 1, 41, 0],
[82, 0, 44, 0],
[82, 1, 41, 127],
[82, 0, 44, 127],
[83, 3, 48, 0],
[83, 3, 36, 127],
[83, 1, 41, 0],
[83, 1, 41, 127],
[84, 1, 41, 0],
[84, 0, 44, 0],
[84, 1, 53, 127],
[84, 0, 46, 127],
[84, 3, 36, 0],
[84, 3, 48, 127],
[85, 1, 53, 0],
[85, 0, 46, 0],
[85, 0, 44, 127],
[87, 1, 41, 127],
[88, 3, 48, 0],
[88, 3, 36, 127],
[88, 0, 44, 0],
[88, 0, 44, 127],
[88, 1, 41, 0],
[88, 1, 48, 127],
[89, 3, 36, 0],
[89, 3, 48, 127],
[91, 3, 48, 0],
[91, 0, 44, 0],
[91, 3, 36, 127],
[91, 0, 44, 127],
[91, 1, 48, 0],
[91, 1, 41, 127],
[92, 0, 44, 0],
[92, 0, 46, 127],
[92, 1, 41, 0],
[92, 1, 51, 127],
[92, 3, 36, 0],
[92, 3, 48, 127],
[95, 0, 46, 0],
[95, 0, 46, 127],
[95, 1, 51, 0],
[95, 1, 41, 127],
[96, 3, 48, 0],
[96, 3, 39, 127],
[96, 1, 41, 0],
[96, 1, 41, 127],
[96, 0, 46, 0],
[96, 0, 44, 127],
[97, 1, 41, 0],
[97, 3, 39, 0],
[97, 3, 51, 127],
[98, 0, 44, 0],
[98, 1, 41, 127],
[98, 0, 44, 127],
[99, 1, 41, 0],
[99, 3, 51, 0],
[99, 1, 41, 127],
[99, 3, 39, 127],
[100, 3, 39, 0],
[100, 0, 44, 0],
[100, 3, 51, 127],
[100, 0, 46, 127],
[100, 1, 41, 0],
[100, 1, 53, 127],
[101, 0, 46, 0],
[101, 0, 44, 127],
[101, 1, 53, 0],
[103, 1, 41, 127],
[104, 1, 41, 0],
[104, 0, 44, 0],
[104, 0, 44, 127],
[104, 1, 58, 127],
[104, 3, 51, 0],
[104, 3, 39, 127],
[105, 3, 39, 0],
[105, 3, 51, 127],
[107, 0, 44, 0],
[107, 0, 44, 127],
[107, 1, 58, 0],
[107, 3, 51, 0],
[107, 1, 41, 127],
[107, 3, 39, 127],
[108, 1, 41, 0],
[108, 0, 44, 0],
[108, 0, 46, 127],
[108, 1, 57, 127],
[108, 3, 39, 0],
[108, 3, 51, 127],
[111, 0, 46, 0],
[111, 0, 46, 127],
[111, 1, 57, 0],
[111, 1, 41, 127],
[112, 3, 51, 0],
[112, 0, 46, 0],
[112, 0, 44, 127],
[112, 3, 46, 127],
[112, 1, 41, 0],
[112, 1, 41, 127],
[113, 1, 41, 0],
[113, 3, 46, 0],
[113, 3, 58, 127],
[114, 0, 44, 0],
[114, 0, 44, 127],
[114, 1, 41, 127],
[115, 3, 58, 0],
[115, 1, 41, 0],
[115, 3, 46, 127],
[115, 1, 41, 127],
[116, 3, 46, 0],
[116, 3, 58, 127],
[116, 0, 44, 0],
[116, 0, 46, 127],
[116, 1, 41, 0],
[116, 1, 53, 127],
[117, 1, 53, 0],
[117, 0, 46, 0],
[117, 0, 44, 127],
[119, 1, 41, 127],
[120, 3, 58, 0],
[120, 0, 44, 0],
[120, 0, 44, 127],
[120, 3, 45, 127],
[120, 1, 41, 0],
[120, 1, 48, 127],
[121, 3, 45, 0],
[121, 3, 57, 127],
[123, 1, 48, 0],
[123, 1, 41, 127],
[123, 0, 44, 0],
[123, 0, 44, 127],
[123, 3, 57, 0],
[123, 3, 45, 127],
[124, 1, 41, 0],
[124, 0, 44, 0],
[124, 1, 51, 127],
[124, 0, 46, 127],
[124, 3, 45, 0],
[124, 3, 57, 127],
[127, 0, 46, 0],
[127, 0, 46, 127],
[127, 1, 51, 0],
[127, 1, 41, 127],
[128, 4, 60, 127],
[128, 0, 46, 0],
[128, 0, 44, 127],
[128, 3, 57, 0],
[128, 3, 41, 127],
[128, 1, 41, 0],
[128, 1, 41, 127],
[128, 6, 55, 127],
[129, 3, 41, 0],
[129, 3, 53, 127],
[129, 1, 41, 0],
[130, 4, 60, 0],
[130, 4, 60, 127],
[130, 1, 41, 127],
[130, 0, 44, 0],
[130, 0, 44, 127],
[131, 1, 41, 0],
[131, 1, 41, 127],
[131, 6, 55, 0],
[131, 6, 55, 127],
[131, 3, 53, 0],
[131, 3, 41, 127],
[132, 4, 60, 0],
[132, 4, 60, 127],
[132, 0, 44, 0],
[132, 0, 46, 127],
[132, 3, 41, 0],
[132, 3, 53, 127],
[132, 6, 55, 0],
[132, 1, 41, 0],
[132, 1, 53, 127],
[132, 7, 55, 127],
[133, 1, 53, 0],
[133, 0, 46, 0],
[133, 0, 44, 127],
[134, 4, 60, 0],
[134, 6, 55, 127],
[134, 4, 60, 127],
[134, 7, 55, 0],
[135, 1, 41, 127],
[136, 0, 44, 0],
[136, 0, 44, 127],
[136, 3, 53, 0],
[136, 3, 41, 127],
[136, 1, 41, 0],
[136, 1, 58, 127],
[136, 4, 60, 0],
[136, 4, 60, 127],
[137, 6, 55, 0],
[137, 6, 55, 127],
[137, 3, 41, 0],
[137, 3, 53, 127],
[138, 4, 60, 0],
[138, 4, 60, 127],
[139, 0, 44, 0],
[139, 3, 53, 0],
[139, 6, 55, 0],
[139, 0, 44, 127],
[139, 3, 41, 127],
[139, 6, 55, 127],
[139, 1, 58, 0],
[139, 1, 41, 127],
[140, 4, 60, 0],
[140, 4, 60, 127],
[140, 1, 41, 0],
[140, 1, 57, 127],
[140, 0, 44, 0],
[140, 0, 46, 127],
[140, 6, 55, 0],
[140, 3, 41, 0],
[140, 3, 53, 127],
[140, 7, 55, 127],
[142, 4, 60, 0],
[142, 4, 60, 127],
[143, 1, 57, 0],
[143, 0, 46, 0],
[143, 0, 46, 127],
[143, 1, 41, 127],
[144, 3, 53, 0],
[144, 0, 46, 0],
[144, 4, 60, 0],
[144, 1, 41, 0],
[144, 6, 55, 127],
[144, 3, 36, 127],
[144, 4, 60, 127],
[144, 0, 44, 127],
[144, 1, 41, 127],
[144, 7, 55, 0],
[145, 1, 41, 0],
[145, 3, 36, 0],
[145, 3, 48, 127],
[146, 0, 44, 0],
[146, 4, 60, 0],
[146, 0, 44, 127],
[146, 4, 60, 127],
[146, 1, 41, 127],
[147, 6, 55, 0],
[147, 1, 41, 0],
[147, 1, 41, 127],
[147, 6, 55, 127],
[147, 3, 48, 0],
[147, 3, 36, 127],
[148, 1, 41, 0],
[148, 4, 60, 0],
[148, 0, 44, 0],
[148, 0, 46, 127],
[148, 4, 60, 127],
[148, 1, 53, 127],
[148, 6, 55, 0],
[148, 3, 36, 0],
[148, 3, 48, 127],
[148, 7, 55, 127],
[149, 0, 46, 0],
[149, 0, 44, 127],
[149, 1, 53, 0],
[150, 4, 60, 0],
[150, 4, 60, 127],
[150, 6, 55, 127],
[150, 7, 55, 0],
[151, 1, 41, 127],
[152, 1, 41, 0],
[152, 3, 48, 0],
[152, 1, 48, 127],
[152, 3, 36, 127],
[152, 0, 44, 0],
[152, 0, 44, 127],
[152, 4, 60, 0],
[152, 4, 60, 127],
[153, 3, 36, 0],
[153, 3, 48, 127],
[153, 6, 55, 0],
[153, 6, 55, 127],
[154, 4, 60, 0],
[154, 4, 60, 127],
[155, 3, 48, 0],
[155, 0, 44, 0],
[155, 3, 36, 127],
[155, 0, 44, 127],
[155, 1, 48, 0],
[155, 1, 41, 127],
[156, 3, 36, 0],
[156, 1, 41, 0],
[156, 1, 51, 127],
[156, 3, 48, 127],
[156, 6, 55, 0],
[156, 0, 44, 0],
[156, 0, 46, 127],
[156, 4, 60, 0],
[156, 4, 60, 127],
[156, 7, 55, 127],
[158, 4, 60, 0],
[158, 4, 60, 127],
[159, 1, 51, 0],
[159, 1, 41, 127],
[159, 0, 46, 0],
[159, 0, 46, 127],
[160, 1, 41, 0],
[160, 4, 60, 0],
[160, 0, 46, 0],
[160, 3, 48, 0],
[160, 6, 55, 127],
[160, 0, 44, 127],
[160, 1, 41, 127],
[160, 3, 39, 127],
[160, 4, 58, 127],
[160, 7, 55, 0],
[161, 1, 41, 0],
[161, 3, 39, 0],
[161, 3, 51, 127],
[162, 4, 58, 0],
[162, 4, 58, 127],
[162, 1, 41, 127],
[162, 0, 44, 0],
[162, 0, 44, 127],
[163, 3, 51, 0],
[163, 3, 39, 127],
[163, 6, 55, 0],
[163, 6, 55, 127],
[163, 1, 41, 0],
[163, 1, 41, 127],
[164, 3, 39, 0],
[164, 4, 58, 0],
[164, 4, 58, 127],
[164, 3, 51, 127],
[164, 1, 41, 0],
[164, 1, 53, 127],
[164, 6, 55, 0],
[164, 0, 44, 0],
[164, 0, 46, 127],
[164, 7, 55, 127],
[165, 0, 46, 0],
[165, 0, 44, 127],
[165, 1, 53, 0],
[166, 4, 58, 0],
[166, 6, 55, 127],
[166, 4, 58, 127],
[166, 7, 55, 0],
[167, 1, 41, 127],
[168, 1, 41, 0],
[168, 0, 44, 0],
[168, 3, 51, 0],
[168, 0, 44, 127],
[168, 1, 58, 127],
[168, 3, 39, 127],
[168, 4, 58, 0],
[168, 4, 58, 127],
[169, 6, 55, 0],
[169, 6, 55, 127],
[169, 3, 39, 0],
[169, 3, 51, 127],
[170, 4, 58, 0],
[170, 4, 58, 127],
[171, 0, 44, 0],
[171, 0, 44, 127],
[171, 3, 51, 0],
[171, 6, 55, 0],
[171, 3, 39, 127],
[171, 6, 55, 127],
[171, 1, 58, 0],
[171, 1, 41, 127],
[172, 1, 41, 0],
[172, 1, 57, 127],
[172, 0, 44, 0],
[172, 0, 46, 127],
[172, 6, 55, 0],
[172, 3, 39, 0],
[172, 3, 51, 127],
[172, 4, 58, 0],
[172, 4, 58, 127],
[172, 7, 55, 127],
[174, 4, 58, 0],
[174, 4, 58, 127],
[175, 0, 46, 0],
[175, 0, 46, 127],
[175, 1, 57, 0],
[175, 1, 41, 127],
[176, 3, 51, 0],
[176, 3, 38, 127],
[176, 0, 46, 0],
[176, 6, 55, 127],
[176, 0, 44, 127],
[176, 1, 41, 0],
[176, 1, 41, 127],
[176, 4, 58, 0],
[176, 4, 58, 127],
[176, 7, 55, 0],
[177, 1, 41, 0],
[177, 3, 38, 0],
[177, 3, 50, 127],
[178, 0, 44, 0],
[178, 0, 44, 127],
[178, 4, 58, 0],
[178, 1, 41, 127],
[178, 4, 58, 127],
[179, 3, 50, 0],
[179, 6, 55, 0],
[179, 1, 41, 0],
[179, 6, 55, 127],
[179, 1, 41, 127],
[179, 3, 38, 127],
[180, 0, 44, 0],
[180, 0, 46, 127],
[180, 4, 58, 0],
[180, 4, 58, 127],
[180, 6, 55, 0],
[180, 1, 41, 0],
[180, 1, 53, 127],
[180, 3, 38, 0],
[180, 3, 50, 127],
[180, 7, 55, 127],
[181, 0, 46, 0],
[181, 0, 44, 127],
[181, 1, 53, 0],
[182, 4, 58, 0],
[182, 4, 58, 127],
[182, 6, 55, 127],
[182, 7, 55, 0],
[183, 1, 41, 127],
[184, 3, 50, 0],
[184, 3, 38, 127],
[184, 1, 41, 0],
[184, 1, 48, 127],
[184, 0, 44, 0],
[184, 0, 44, 127],
[184, 4, 58, 0],
[184, 4, 58, 127],
[185, 6, 55, 0],
[185, 6, 55, 127],
[185, 3, 38, 0],
[185, 3, 50, 127],
[186, 4, 58, 0],
[186, 4, 58, 127],
[187, 3, 50, 0],
[187, 1, 48, 0],
[187, 0, 44, 0],
[187, 0, 44, 127],
[187, 1, 41, 127],
[187, 3, 38, 127],
[188, 6, 55, 0],
[188, 4, 58, 0],
[188, 3, 38, 0],
[188, 0, 44, 0],
[188, 1, 41, 0],
[188, 1, 51, 127],
[188, 0, 46, 127],
[188, 3, 50, 127],
[188, 4, 58, 127],
[188, 7, 55, 127],
[190, 4, 58, 0],
[190, 4, 58, 127],
[191, 1, 51, 0],
[191, 0, 46, 0],
[191, 0, 46, 127],
[191, 1, 41, 127],
[192, 1, 41, 0],
[192, 3, 50, 0],
[192, 0, 46, 0],
[192, 1, 41, 127],
[192, 3, 41, 127],
[192, 0, 44, 127],
[192, 4, 58, 0],
[192, 6, 55, 127],
[192, 4, 57, 127],
[192, 7, 55, 0],
[193, 1, 41, 0],
[193, 3, 41, 0],
[193, 3, 53, 127],
[194, 0, 44, 0],
[194, 0, 44, 127],
[194, 4, 57, 0],
[194, 4, 57, 127],
[194, 1, 41, 127],
[195, 6, 55, 0],
[195, 3, 53, 0],
[195, 1, 41, 0],
[195, 3, 41, 127],
[195, 1, 41, 127],
[195, 6, 55, 127],
[196, 0, 44, 0],
[196, 0, 46, 127],
[196, 4, 57, 0],
[196, 6, 55, 0],
[196, 4, 57, 127],
[196, 1, 41, 0],
[196, 3, 41, 0],
[196, 3, 53, 127],
[196, 1, 53, 127],
[196, 7, 55, 127],
[197, 1, 53, 0],
[197, 0, 46, 0],
[197, 0, 44, 127],
[198, 6, 55, 127],
[198, 4, 57, 0],
[198, 4, 57, 127],
[198, 7, 55, 0],
[199, 1, 41, 127],
[200, 0, 44, 0],
[200, 0, 44, 127],
[200, 3, 53, 0],
[200, 3, 41, 127],
[200, 1, 41, 0],
[200, 4, 57, 0],
[200, 4, 57, 127],
[200, 1, 58, 127],
[201, 6, 55, 0],
[201, 6, 55, 127],
[201, 3, 41, 0],
[201, 3, 53, 127],
[202, 4, 57, 0],
[202, 4, 57, 127],
[203, 1, 58, 0],
[203, 1, 41, 127],
[203, 0, 44, 0],
[203, 0, 44, 127],
[203, 6, 55, 0],
[203, 6, 55, 127],
[203, 3, 53, 0],
[203, 3, 41, 127],
[204, 3, 41, 0],
[204, 4, 57, 0],
[204, 0, 44, 0],
[204, 4, 57, 127],
[204, 3, 53, 127],
[204, 0, 46, 127],
[204, 6, 55, 0],
[204, 1, 41, 0],
[204, 1, 57, 127],
[204, 7, 55, 127],
[206, 4, 57, 0],
[206, 4, 57, 127],
[207, 0, 46, 0],
[207, 0, 46, 127],
[207, 1, 57, 0],
[207, 1, 41, 127],
[208, 3, 53, 0],
[208, 1, 41, 0],
[208, 0, 46, 0],
[208, 0, 44, 127],
[208, 3, 36, 127],
[208, 1, 41, 127],
[208, 4, 57, 0],
[208, 6, 55, 127],
[208, 4, 57, 127],
[208, 7, 55, 0],
[209, 1, 41, 0],
[209, 3, 36, 0],
[209, 3, 48, 127],
[210, 4, 57, 0],
[210, 4, 57, 127],
[210, 0, 44, 0],
[210, 1, 41, 127],
[210, 0, 44, 127],
[211, 1, 41, 0],
[211, 1, 41, 127],
[211, 3, 48, 0],
[211, 3, 36, 127],
[211, 6, 55, 0],
[211, 6, 55, 127],
[212, 6, 55, 0],
[212, 0, 44, 0],
[212, 4, 57, 0],
[212, 3, 36, 0],
[212, 1, 41, 0],
[212, 1, 53, 127],
[212, 4, 57, 127],
[212, 3, 48, 127],
[212, 0, 46, 127],
[212, 7, 55, 127],
[213, 1, 53, 0],
[213, 0, 46, 0],
[213, 0, 44, 127],
[214, 4, 57, 0],
[214, 4, 57, 127],
[214, 6, 55, 127],
[214, 7, 55, 0],
[215, 1, 41, 127],
[216, 4, 57, 0],
[216, 4, 57, 127],
[216, 3, 48, 0],
[216, 3, 36, 127],
[216, 0, 44, 0],
[216, 0, 44, 127],
[216, 1, 41, 0],
[216, 1, 48, 127],
[217, 3, 36, 0],
[217, 3, 48, 127],
[217, 6, 55, 0],
[217, 6, 55, 127],
[218, 4, 57, 0],
[218, 4, 57, 127],
[219, 1, 48, 0],
[219, 3, 48, 0],
[219, 1, 41, 127],
[219, 3, 36, 127],
[219, 0, 44, 0],
[219, 0, 44, 127],
[220, 1, 41, 0],
[220, 1, 51, 127],
[220, 0, 44, 0],
[220, 0, 46, 127],
[220, 4, 57, 0],
[220, 4, 57, 127],
[220, 3, 36, 0],
[220, 3, 48, 127],
[220, 6, 55, 0],
[220, 7, 55, 127],
[222, 4, 57, 0],
[222, 4, 57, 127],
[223, 1, 51, 0],
[223, 1, 41, 127],
[223, 0, 46, 0],
[223, 0, 46, 127],
[224, 4, 57, 0],
[224, 4, 55, 127],
[224, 1, 41, 0],
[224, 1, 41, 127],
[224, 3, 48, 0],
[224, 3, 39, 127],
[224, 6, 55, 127],
[224, 0, 46, 0],
[224, 0, 44, 127],
[224, 7, 55, 0],
[225, 3, 39, 0],
[225, 3, 51, 127],
[225, 1, 41, 0],
[226, 1, 41, 127],
[226, 4, 55, 0],
[226, 4, 55, 127],
[226, 0, 44, 0],
[226, 0, 44, 127],
[227, 1, 41, 0],
[227, 1, 41, 127],
[227, 3, 51, 0],
[227, 3, 39, 127],
[227, 6, 55, 0],
[227, 6, 55, 127],
[228, 4, 55, 0],
[228, 4, 55, 127],
[228, 6, 55, 0],
[228, 3, 39, 0],
[228, 3, 51, 127],
[228, 1, 41, 0],
[228, 1, 53, 127],
[228, 0, 44, 0],
[228, 0, 46, 127],
[228, 7, 55, 127],
[229, 0, 46, 0],
[229, 0, 44, 127],
[229, 1, 53, 0],
[230, 4, 55, 0],
[230, 6, 55, 127],
[230, 4, 55, 127],
[230, 7, 55, 0],
[231, 1, 41, 127],
[232, 1, 41, 0],
[232, 4, 55, 0],
[232, 1, 58, 127],
[232, 4, 55, 127],
[232, 3, 51, 0],
[232, 3, 39, 127],
[232, 0, 44, 0],
[232, 0, 44, 127],
[233, 3, 39, 0],
[233, 3, 51, 127],
[233, 6, 55, 0],
[233, 6, 55, 127],
[234, 4, 55, 0],
[234, 4, 55, 127],
[235, 3, 51, 0],
[235, 1, 58, 0],
[235, 6, 55, 0],
[235, 0, 44, 0],
[235, 0, 44, 127],
[235, 1, 41, 127],
[235, 3, 39, 127],
[235, 6, 55, 127],
[236, 4, 55, 0],
[236, 1, 41, 0],
[236, 0, 44, 0],
[236, 1, 57, 127],
[236, 0, 46, 127],
[236, 4, 55, 127],
[236, 6, 55, 0],
[236, 3, 39, 0],
[236, 3, 51, 127],
[236, 7, 55, 127],
[238, 4, 55, 0],
[238, 4, 55, 127],
[239, 1, 57, 0],
[239, 0, 46, 0],
[239, 0, 46, 127],
[239, 1, 41, 127],
[240, 3, 51, 0],
[240, 1, 41, 0],
[240, 0, 46, 0],
[240, 3, 46, 127],
[240, 0, 44, 127],
[240, 1, 41, 127],
[240, 4, 55, 0],
[240, 6, 55, 127],
[240, 4, 53, 127],
[240, 7, 55, 0],
[241, 1, 41, 0],
[241, 3, 46, 0],
[241, 3, 58, 127],
[242, 0, 44, 0],
[242, 0, 44, 127],
[242, 4, 53, 0],
[242, 4, 53, 127],
[242, 1, 41, 127],
[243, 6, 55, 0],
[243, 1, 41, 0],
[243, 3, 58, 0],
[243, 6, 55, 127],
[243, 3, 46, 127],
[243, 1, 41, 127],
[244, 4, 53, 0],
[244, 6, 55, 0],
[244, 0, 44, 0],
[244, 1, 41, 0],
[244, 3, 46, 0],
[244, 0, 46, 127],
[244, 1, 53, 127],
[244, 3, 58, 127],
[244, 4, 53, 127],
[244, 7, 55, 127],
[245, 1, 53, 0],
[245, 0, 46, 0],
[245, 0, 44, 127],
[246, 4, 53, 0],
[246, 4, 53, 127],
[246, 6, 55, 127],
[246, 7, 55, 0],
[247, 1, 41, 127],
[248, 3, 58, 0],
[248, 3, 45, 127],
[248, 0, 44, 0],
[248, 0, 44, 127],
[248, 4, 53, 0],
[248, 1, 41, 0],
[248, 1, 48, 127],
[248, 4, 53, 127],
[249, 3, 45, 0],
[249, 6, 55, 0],
[249, 6, 55, 127],
[249, 3, 57, 127],
[250, 4, 53, 0],
[250, 4, 53, 127],
[251, 3, 57, 0],
[251, 3, 45, 127],
[251, 0, 44, 0],
[251, 0, 44, 127],
[251, 1, 48, 0],
[251, 1, 41, 127],
[252, 3, 45, 0],
[252, 1, 41, 0],
[252, 1, 51, 127],
[252, 3, 57, 127],
[252, 6, 55, 0],
[252, 0, 44, 0],
[252, 0, 46, 127],
[252, 4, 53, 0],
[252, 4, 53, 127],
[252, 7, 55, 127],
[254, 4, 53, 0],
[254, 4, 53, 127],
[255, 0, 46, 0],
[255, 0, 46, 127],
[255, 1, 51, 0],
[255, 1, 41, 127],
[256, 1, 41, 0],
[256, 0, 46, 0],
[256, 0, 44, 127],
[256, 2, 53, 127],
[256, 1, 41, 127],
[256, 3, 57, 0],
[256, 6, 55, 127],
[256, 3, 41, 127],
[256, 4, 53, 0],
[256, 4, 60, 127],
[256, 7, 55, 0],
[257, 3, 41, 0],
[257, 3, 53, 127],
[257, 1, 41, 0],
[258, 0, 44, 0],
[258, 2, 53, 0],
[258, 1, 41, 127],
[258, 0, 44, 127],
[258, 2, 53, 127],
[258, 4, 60, 0],
[258, 4, 60, 127],
[259, 3, 53, 0],
[259, 3, 41, 127],
[259, 6, 55, 0],
[259, 6, 55, 127],
[259, 1, 41, 0],
[259, 1, 41, 127],
[260, 1, 41, 0],
[260, 0, 44, 0],
[260, 1, 53, 127],
[260, 0, 46, 127],
[260, 6, 55, 0],
[260, 4, 60, 0],
[260, 4, 60, 127],
[260, 3, 41, 0],
[260, 3, 53, 127],
[260, 7, 55, 127],
[261, 0, 46, 0],
[261, 0, 44, 127],
[261, 1, 53, 0],
[262, 2, 53, 0],
[262, 4, 60, 0],
[262, 2, 53, 127],
[262, 4, 60, 127],
[262, 6, 55, 127],
[262, 7, 55, 0],
[263, 1, 41, 127],
[264, 2, 53, 0],
[264, 2, 53, 127],
[264, 1, 41, 0],
[264, 1, 58, 127],
[264, 3, 53, 0],
[264, 3, 41, 127],
[264, 4, 60, 0],
[264, 4, 60, 127],
[264, 0, 44, 0],
[264, 0, 44, 127],
[265, 3, 41, 0],
[265, 3, 53, 127],
[265, 6, 55, 0],
[265, 6, 55, 127],
[266, 4, 60, 0],
[266, 4, 60, 127],
[266, 2, 53, 0],
[266, 2, 53, 127],
[267, 6, 55, 0],
[267, 3, 53, 0],
[267, 6, 55, 127],
[267, 3, 41, 127],
[267, 1, 58, 0],
[267, 0, 44, 0],
[267, 0, 44, 127],
[267, 1, 41, 127],
[268, 1, 41, 0],
[268, 1, 57, 127],
[268, 0, 44, 0],
[268, 0, 46, 127],
[268, 6, 55, 0],
[268, 4, 60, 0],
[268, 4, 60, 127],
[268, 3, 41, 0],
[268, 3, 53, 127],
[268, 7, 55, 127],
[270, 2, 53, 0],
[270, 4, 60, 0],
[270, 4, 60, 127],
[270, 2, 53, 127],
[271, 0, 46, 0],
[271, 0, 46, 127],
[271, 1, 57, 0],
[271, 1, 41, 127],
[272, 2, 53, 0],
[272, 4, 60, 0],
[272, 1, 41, 0],
[272, 0, 46, 0],
[272, 4, 60, 127],
[272, 1, 41, 127],
[272, 2, 53, 127],
[272, 0, 44, 127],
[272, 3, 53, 0],
[272, 6, 55, 127],
[272, 3, 36, 127],
[272, 7, 55, 0],
[273, 1, 41, 0],
[273, 3, 36, 0],
[273, 3, 48, 127],
[274, 2, 53, 0],
[274, 4, 60, 0],
[274, 2, 53, 127],
[274, 4, 60, 127],
[274, 1, 41, 127],
[274, 0, 44, 0],
[274, 0, 44, 127],
[275, 3, 48, 0],
[275, 6, 55, 0],
[275, 1, 41, 0],
[275, 3, 36, 127],
[275, 6, 55, 127],
[275, 1, 41, 127],
[276, 3, 36, 0],
[276, 6, 55, 0],
[276, 3, 48, 127],
[276, 1, 41, 0],
[276, 1, 53, 127],
[276, 4, 60, 0],
[276, 0, 44, 0],
[276, 0, 46, 127],
[276, 4, 60, 127],
[276, 7, 55, 127],
[277, 0, 46, 0],
[277, 0, 44, 127],
[277, 1, 53, 0],
[278, 2, 53, 0],
[278, 2, 53, 127],
[278, 6, 55, 127],
[278, 4, 60, 0],
[278, 4, 60, 127],
[278, 7, 55, 0],
[279, 1, 41, 127],
[280, 3, 48, 0],
[280, 4, 60, 0],
[280, 0, 44, 0],
[280, 2, 53, 0],
[280, 3, 36, 127],
[280, 4, 60, 127],
[280, 0, 44, 127],
[280, 2, 53, 127],
[280, 1, 41, 0],
[280, 1, 48, 127],
[281, 3, 36, 0],
[281, 3, 48, 127],
[281, 6, 55, 0],
[281, 6, 55, 127],
[282, 2, 53, 0],
[282, 2, 53, 127],
[282, 4, 60, 0],
[282, 4, 60, 127],
[283, 1, 48, 0],
[283, 1, 41, 127],
[283, 3, 48, 0],
[283, 3, 36, 127],
[283, 0, 44, 0],
[283, 0, 44, 127],
[284, 1, 41, 0],
[284, 1, 51, 127],
[284, 0, 44, 0],
[284, 4, 60, 0],
[284, 0, 46, 127],
[284, 4, 60, 127],
[284, 6, 55, 0],
[284, 3, 36, 0],
[284, 3, 48, 127],
[284, 7, 55, 127],
[286, 2, 53, 0],
[286, 2, 53, 127],
[286, 4, 60, 0],
[286, 4, 60, 127],
[287, 1, 51, 0],
[287, 1, 41, 127],
[287, 0, 46, 0],
[287, 0, 46, 127],
[288, 3, 48, 0],
[288, 1, 41, 0],
[288, 3, 39, 127],
[288, 1, 41, 127],
[288, 4, 60, 0],
[288, 4, 58, 127],
[288, 2, 53, 0],
[288, 2, 51, 127],
[288, 0, 46, 0],
[288, 6, 55, 127],
[288, 0, 44, 127],
[288, 7, 55, 0],
[289, 1, 41, 0],
[289, 3, 39, 0],
[289, 3, 51, 127],
[290, 2, 51, 0],
[290, 2, 51, 127],
[290, 0, 44, 0],
[290, 0, 44, 127],
[290, 1, 41, 127],
[290, 4, 58, 0],
[290, 4, 58, 127],
[291, 6, 55, 0],
[291, 6, 55, 127],
[291, 1, 41, 0],
[291, 1, 41, 127],
[291, 3, 51, 0],
[291, 3, 39, 127],
[292, 1, 41, 0],
[292, 3, 39, 0],
[292, 4, 58, 0],
[292, 1, 53, 127],
[292, 3, 51, 127],
[292, 4, 58, 127],
[292, 0, 44, 0],
[292, 6, 55, 0],
[292, 0, 46, 127],
[292, 7, 55, 127],
[293, 1, 53, 0],
[293, 0, 46, 0],
[293, 0, 44, 127],
[294, 2, 51, 0],
[294, 4, 58, 0],
[294, 6, 55, 127],
[294, 2, 51, 127],
[294, 4, 58, 127],
[294, 7, 55, 0],
[295, 1, 41, 127],
[296, 1, 41, 0],
[296, 3, 51, 0],
[296, 3, 39, 127],
[296, 1, 58, 127],
[296, 0, 44, 0],
[296, 0, 44, 127],
[296, 4, 58, 0],
[296, 2, 51, 0],
[296, 2, 51, 127],
[296, 4, 58, 127],
[297, 6, 55, 0],
[297, 6, 55, 127],
[297, 3, 39, 0],
[297, 3, 51, 127],
[298, 4, 58, 0],
[298, 2, 51, 0],
[298, 4, 58, 127],
[298, 2, 51, 127],
[299, 0, 44, 0],
[299, 0, 44, 127],
[299, 1, 58, 0],
[299, 1, 41, 127],
[299, 6, 55, 0],
[299, 6, 55, 127],
[299, 3, 51, 0],
[299, 3, 39, 127],
[300, 1, 41, 0],
[300, 1, 57, 127],
[300, 0, 44, 0],
[300, 0, 46, 127],
[300, 4, 58, 0],
[300, 4, 58, 127],
[300, 6, 55, 0],
[300, 3, 39, 0],
[300, 3, 51, 127],
[300, 7, 55, 127],
[302, 4, 58, 0],
[302, 4, 58, 127],
[302, 2, 51, 0],
[302, 2, 51, 127],
[303, 0, 46, 0],
[303, 0, 46, 127],
[303, 1, 57, 0],
[303, 1, 41, 127],
[304, 2, 51, 0],
[304, 2, 50, 127],
[304, 0, 46, 0],
[304, 0, 44, 127],
[304, 1, 41, 0],
[304, 1, 41, 127],
[304, 6, 55, 127],
[304, 3, 51, 0],
[304, 3, 38, 127],
[304, 4, 58, 0],
[304, 4, 58, 127],
[304, 7, 55, 0],
[305, 3, 38, 0],
[305, 3, 50, 127],
[305, 1, 41, 0],
[306, 1, 41, 127],
[306, 0, 44, 0],
[306, 0, 44, 127],
[306, 4, 58, 0],
[306, 2, 50, 0],
[306, 4, 58, 127],
[306, 2, 50, 127],
[307, 3, 50, 0],
[307, 1, 41, 0],
[307, 6, 55, 0],
[307, 3, 38, 127],
[307, 1, 41, 127],
[307, 6, 55, 127],
[308, 0, 44, 0],
[308, 0, 46, 127],
[308, 6, 55, 0],
[308, 3, 38, 0],
[308, 3, 50, 127],
[308, 4, 58, 0],
[308, 4, 58, 127],
[308, 1, 41, 0],
[308, 1, 53, 127],
[308, 7, 55, 127],
[309, 0, 46, 0],
[309, 0, 44, 127],
[309, 1, 53, 0],
[310, 2, 50, 0],
[310, 6, 55, 127],
[310, 4, 58, 0],
[310, 2, 50, 127],
[310, 4, 58, 127],
[310, 7, 55, 0],
[311, 1, 41, 127],
[312, 2, 50, 0],
[312, 2, 50, 127],
[312, 1, 41, 0],
[312, 1, 48, 127],
[312, 3, 50, 0],
[312, 3, 38, 127],
[312, 0, 44, 0],
[312, 0, 44, 127],
[312, 4, 58, 0],
[312, 4, 58, 127],
[313, 6, 55, 0],
[313, 6, 55, 127],
[313, 3, 38, 0],
[313, 3, 50, 127],
[314, 2, 50, 0],
[314, 4, 58, 0],
[314, 2, 50, 127],
[314, 4, 58, 127],
[315, 1, 48, 0],
[315, 3, 50, 0],
[315, 3, 38, 127],
[315, 1, 41, 127],
[315, 0, 44, 0],
[315, 0, 44, 127],
[316, 3, 38, 0],
[316, 4, 58, 0],
[316, 1, 41, 0],
[316, 3, 50, 127],
[316, 4, 58, 127],
[316, 1, 51, 127],
[316, 6, 55, 0],
[316, 0, 44, 0],
[316, 0, 46, 127],
[316, 7, 55, 127],
[318, 2, 50, 0],
[318, 4, 58, 0],
[318, 2, 50, 127],
[318, 4, 58, 127],
[319, 1, 51, 0],
[319, 1, 41, 127],
[319, 0, 46, 0],
[319, 0, 46, 127],
[320, 3, 50, 0],
[320, 4, 58, 0],
[320, 0, 46, 0],
[320, 0, 44, 127],
[320, 4, 57, 127],
[320, 3, 41, 127],
[320, 2, 50, 0],
[320, 2, 53, 127],
[320, 1, 41, 0],
[320, 6, 55, 127],
[320, 1, 41, 127],
[320, 7, 55, 0],
[321, 3, 41, 0],
[321, 3, 53, 127],
[321, 1, 41, 0],
[322, 2, 53, 0],
[322, 2, 53, 127],
[322, 0, 44, 0],
[322, 0, 44, 127],
[322, 1, 41, 127],
[322, 4, 57, 0],
[322, 4, 57, 127],
[323, 1, 41, 0],
[323, 1, 41, 127],
[323, 3, 53, 0],
[323, 6, 55, 0],
[323, 3, 41, 127],
[323, 6, 55, 127],
[324, 4, 57, 0],
[324, 3, 41, 0],
[324, 0, 44, 0],
[324, 4, 57, 127],
[324, 3, 53, 127],
[324, 0, 46, 127],
[324, 1, 41, 0],
[324, 6, 55, 0],
[324, 1, 53, 127],
[324, 7, 55, 127],
[325, 1, 53, 0],
[325, 0, 46, 0],
[325, 0, 44, 127],
[326, 2, 53, 0],
[326, 2, 53, 127],
[326, 6, 55, 127],
[326, 4, 57, 0],
[326, 4, 57, 127],
[326, 7, 55, 0],
[327, 1, 41, 127],
[328, 1, 41, 0],
[328, 3, 53, 0],
[328, 1, 58, 127],
[328, 3, 41, 127],
[328, 0, 44, 0],
[328, 0, 44, 127],
[328, 2, 53, 0],
[328, 4, 57, 0],
[328, 4, 57, 127],
[328, 2, 53, 127],
[329, 3, 41, 0],
[329, 3, 53, 127],
[329, 6, 55, 0],
[329, 6, 55, 127],
[330, 2, 53, 0],
[330, 2, 53, 127],
[330, 4, 57, 0],
[330, 4, 57, 127],
[331, 3, 53, 0],
[331, 3, 41, 127],
[331, 6, 55, 0],
[331, 6, 55, 127],
[331, 0, 44, 0],
[331, 0, 44, 127],
[331, 1, 58, 0],
[331, 1, 41, 127],
[332, 3, 41, 0],
[332, 4, 57, 0],
[332, 0, 44, 0],
[332, 3, 53, 127],
[332, 4, 57, 127],
[332, 0, 46, 127],
[332, 6, 55, 0],
[332, 1, 41, 0],
[332, 1, 57, 127],
[332, 7, 55, 127],
[334, 2, 53, 0],
[334, 2, 53, 127],
[334, 4, 57, 0],
[334, 4, 57, 127],
[335, 0, 46, 0],
[335, 0, 46, 127],
[335, 1, 57, 0],
[335, 1, 41, 127],
[336, 3, 53, 0],
[336, 3, 36, 127],
[336, 0, 46, 0],
[336, 0, 44, 127],
[336, 2, 53, 0],
[336, 6, 55, 127],
[336, 2, 53, 127],
[336, 1, 41, 0],
[336, 4, 57, 0],
[336, 1, 41, 127],
[336, 4, 57, 127],
[336, 7, 55, 0],
[337, 1, 41, 0],
[337, 3, 36, 0],
[337, 3, 48, 127],
[338, 2, 53, 0],
[338, 0, 44, 0],
[338, 4, 57, 0],
[338, 0, 44, 127],
[338, 2, 53, 127],
[338, 4, 57, 127],
[338, 1, 41, 127],
[339, 3, 48, 0],
[339, 3, 36, 127],
[339, 6, 55, 0],
[339, 6, 55, 127],
[339, 1, 41, 0],
[339, 1, 41, 127],
[340, 4, 57, 0],
[340, 3, 36, 0],
[340, 0, 44, 0],
[340, 4, 57, 127],
[340, 0, 46, 127],
[340, 3, 48, 127],
[340, 6, 55, 0],
[340, 1, 41, 0],
[340, 1, 53, 127],
[340, 7, 55, 127],
[341, 1, 53, 0],
[341, 0, 46, 0],
[341, 0, 44, 127],
[342, 2, 53, 0],
[342, 6, 55, 127],
[342, 4, 57, 0],
[342, 2, 53, 127],
[342, 4, 57, 127],
[342, 7, 55, 0],
[343, 1, 41, 127],
[344, 2, 53, 0],
[344, 2, 53, 127],
[344, 3, 48, 0],
[344, 3, 36, 127],
[344, 4, 57, 0],
[344, 4, 57, 127],
[344, 0, 44, 0],
[344, 0, 44, 127],
[344, 1, 41, 0],
[344, 1, 48, 127],
[345, 6, 55, 0],
[345, 6, 55, 127],
[345, 3, 36, 0],
[345, 3, 48, 127],
[346, 4, 57, 0],
[346, 2, 53, 0],
[346, 4, 57, 127],
[346, 2, 53, 127],
[347, 1, 48, 0],
[347, 1, 41, 127],
[347, 3, 48, 0],
[347, 0, 44, 0],
[347, 3, 36, 127],
[347, 0, 44, 127],
[348, 3, 36, 0],
[348, 3, 48, 127],
[348, 0, 44, 0],
[348, 0, 46, 127],
[348, 1, 41, 0],
[348, 1, 51, 127],
[348, 6, 55, 0],
[348, 4, 57, 0],
[348, 4, 57, 127],
[348, 7, 55, 127],
[350, 2, 53, 0],
[350, 4, 57, 0],
[350, 4, 57, 127],
[350, 2, 53, 127],
[351, 1, 51, 0],
[351, 1, 41, 127],
[351, 0, 46, 0],
[351, 0, 46, 127],
[352, 2, 53, 0],
[352, 2, 60, 127],
[352, 0, 46, 0],
[352, 0, 44, 127],
[352, 3, 48, 0],
[352, 3, 39, 127],
[352, 6, 55, 127],
[352, 4, 57, 0],
[352, 4, 55, 127],
[352, 1, 41, 0],
[352, 1, 41, 127],
[352, 7, 55, 0],
[353, 3, 39, 0],
[353, 3, 51, 127],
[353, 1, 41, 0],
[354, 4, 55, 0],
[354, 0, 44, 0],
[354, 2, 60, 0],
[354, 1, 41, 127],
[354, 4, 55, 127],
[354, 2, 60, 127],
[354, 0, 44, 127],
[355, 3, 51, 0],
[355, 1, 41, 0],
[355, 3, 39, 127],
[355, 1, 41, 127],
[355, 6, 55, 0],
[355, 6, 55, 127],
[356, 3, 39, 0],
[356, 4, 55, 0],
[356, 0, 44, 0],
[356, 3, 51, 127],
[356, 0, 46, 127],
[356, 4, 55, 127],
[356, 6, 55, 0],
[356, 1, 41, 0],
[356, 1, 53, 127],
[356, 7, 55, 127],
[357, 0, 46, 0],
[357, 0, 44, 127],
[357, 1, 53, 0],
[358, 6, 55, 127],
[358, 2, 60, 0],
[358, 4, 55, 0],
[358, 2, 60, 127],
[358, 4, 55, 127],
[358, 7, 55, 0],
[359, 1, 41, 127],
[360, 1, 41, 0],
[360, 4, 55, 0],
[360, 1, 58, 127],
[360, 4, 55, 127],
[360, 2, 60, 0],
[360, 3, 51, 0],
[360, 2, 60, 127],
[360, 3, 39, 127],
[360, 0, 44, 0],
[360, 0, 44, 127],
[361, 6, 55, 0],
[361, 6, 55, 127],
[361, 3, 39, 0],
[361, 3, 51, 127],
[362, 4, 55, 0],
[362, 2, 60, 0],
[362, 4, 55, 127],
[362, 2, 60, 127],
[363, 1, 58, 0],
[363, 1, 41, 127],
[363, 6, 55, 0],
[363, 3, 51, 0],
[363, 6, 55, 127],
[363, 3, 39, 127],
[363, 0, 44, 0],
[363, 0, 44, 127],
[364, 6, 55, 0],
[364, 0, 44, 0],
[364, 4, 55, 0],
[364, 3, 39, 0],
[364, 3, 51, 127],
[364, 0, 46, 127],
[364, 4, 55, 127],
[364, 1, 41, 0],
[364, 1, 57, 127],
[364, 7, 55, 127],
[366, 2, 60, 0],
[366, 2, 60, 127],
[366, 4, 55, 0],
[366, 4, 55, 127],
[367, 0, 46, 0],
[367, 1, 57, 0],
[367, 1, 41, 127],
[367, 0, 46, 127],
[368, 1, 41, 0],
[368, 4, 55, 0],
[368, 0, 46, 0],
[368, 2, 60, 0],
[368, 6, 55, 127],
[368, 2, 58, 127],
[368, 4, 53, 127],
[368, 0, 44, 127],
[368, 1, 41, 127],
[368, 3, 51, 0],
[368, 3, 46, 127],
[368, 7, 55, 0],
[369, 1, 41, 0],
[369, 3, 46, 0],
[369, 3, 58, 127],
[370, 2, 58, 0],
[370, 2, 58, 127],
[370, 0, 44, 0],
[370, 0, 44, 127],
[370, 4, 53, 0],
[370, 4, 53, 127],
[370, 1, 41, 127],
[371, 1, 41, 0],
[371, 6, 55, 0],
[371, 1, 41, 127],
[371, 6, 55, 127],
[371, 3, 58, 0],
[371, 3, 46, 127],
[372, 1, 41, 0],
[372, 4, 53, 0],
[372, 3, 46, 0],
[372, 3, 58, 127],
[372, 1, 53, 127],
[372, 4, 53, 127],
[372, 6, 55, 0],
[372, 0, 44, 0],
[372, 0, 46, 127],
[372, 7, 55, 127],
[373, 0, 46, 0],
[373, 0, 44, 127],
[373, 1, 53, 0],
[374, 2, 58, 0],
[374, 2, 58, 127],
[374, 6, 55, 127],
[374, 4, 53, 0],
[374, 4, 53, 127],
[374, 7, 55, 0],
[375, 1, 41, 127],
[376, 2, 58, 0],
[376, 1, 41, 0],
[376, 0, 44, 0],
[376, 4, 53, 0],
[376, 2, 58, 127],
[376, 1, 48, 127],
[376, 0, 44, 127],
[376, 4, 53, 127],
[376, 3, 58, 0],
[376, 3, 45, 127],
[377, 6, 55, 0],
[377, 3, 45, 0],
[377, 3, 57, 127],
[377, 6, 55, 127],
[378, 2, 58, 0],
[378, 4, 53, 0],
[378, 2, 58, 127],
[378, 4, 53, 127],
[379, 0, 44, 0],
[379, 0, 44, 127],
[379, 1, 48, 0],
[379, 1, 41, 127],
[379, 3, 57, 0],
[379, 3, 45, 127],
[380, 3, 45, 0],
[380, 1, 41, 0],
[380, 4, 53, 0],
[380, 3, 57, 127],
[380, 4, 53, 127],
[380, 1, 51, 127],
[380, 6, 55, 0],
[380, 0, 44, 0],
[380, 0, 46, 127],
[380, 7, 55, 127],
[382, 2, 58, 0],
[382, 2, 58, 127],
[382, 4, 53, 0],
[382, 4, 53, 127],
[383, 1, 51, 0],
[383, 1, 41, 127],
[383, 0, 46, 0],
[383, 0, 46, 127],
[387, 3, 57, 0],
[387, 1, 41, 0],
[387, 4, 53, 0],
[387, 0, 46, 0],
[387, 2, 58, 0],
[387, 7, 55, 0],
];
