let tv = {
  power: true,
  volume: 2,
  channel: 54,
  type: "plasma",
  resolution: "4k",
  powerConsumptionInWatts: 80,
  togglePower: function() {
    this.power = !this.power;
  }
  changeVolume : function(change){
    this.power += change;
  },
  changeChannel : function(channel){
    this.channel = channel;
  }
}
