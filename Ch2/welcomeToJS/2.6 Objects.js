const player = {
    name: 'YJ',
    point: 100,
    student: true,
};

console.log(player);
console.log(player.name);

player.student = false;
console.log(player);

player.point = player.point + 100;
console.log(player);

player.time = '00:00';
console.log(player);
