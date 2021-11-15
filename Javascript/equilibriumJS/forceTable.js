function tableValues(i)
{
    let dz = .1;
    let vector01Length = 25 * Math.exp(-(i+1) * dz);
    let vector03Length = 25 * Math.exp(-(i) * dz);
    let vector02Length = vector03Length - vector01Length;

    $('#01').html(vector01Length.toFixed(2));
    $('#02').html(vector02Length.toFixed(2));
    $('#03').html(vector03Length.toFixed(2));
    $('#04').html(0);
}