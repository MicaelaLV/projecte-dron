const mongoose = require("mongoose");
const Race     = require("../model/race");
const User     = require("../model/user");

mongoose.connect("mongodb://localhost/meteor-races");

const initialUsers = [
  {
    username: "jordi",
    password: "jordi",
    name: "Jordi20H",
    level: 3,
    points: 1230,
    drone_name: "Grasshopper",
    drone_description: String,
    races_id: [{type: Schema.Types.ObjectId, ref: 'Race'}]
  },
  {
    username: "awk",
    password: "awk",
    name: "AWKBOTS",
    level: 1,
    points: 400,
    drone_name: "Awkward King",
    drone_description: "Exploding onto the DRL circuit with a dramatic sweep of Level 2 - 2016, this former competitive motorcross racer knows how to handle speed.",
    races_id: [{type: Schema.Types.ObjectId, ref: 'Race'}]
  },
  {
    username: "addicted",
    password: "addicted",
    name: "ADD1CT3DD",
    level: 2,
    points: 500,
    drone_name: "Flynoceros Cerberus",
    drone_description: "T-Motor F40 Pro 2400kv / TBS 24A / Runcam Swift 2 / TBS Unify / TBS Triumph / Raceflight Revolt / BF 3.1.7 / HQProp 5x4.3x3 / Pulse 4S 1550 95C / GoPro Hero 5 Session",
    races_id: [{type: Schema.Types.ObjectId, ref: 'Race'}]
  },
  {
    username: "beast",
    password: "beast",
    name: "BEASTMODE",
    level: 3,
    points: 1130,
    drone_name: "Detroitmultirotor Beastmode",
    drone_description: "A tremendously awarded pilot across the USA, BeastMode is an aggressive and high speed pilot. Hard corners, full throttle straights, his name accurate to his flying style.",
    races_id: [{type: Schema.Types.ObjectId, ref: 'Race'}]
  },
]