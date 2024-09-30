// Importer nødvendige moduler
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
require('dotenv').config();

// Sett opp Express app
const app = express();
app.use(express.json());

// MongoDB-tilkobling (bruk din egen MongoDB URL)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Definer brukerens datamodell
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobileNumber: { type: String, unique: true },
    password: String,
    diceRolls: [Number],
    timestamps: [Date],
});

// Krypteringsmetode for passord
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10); // Krypter passordet
    }
    next();
});

// Lagre brukerens modell
const User = mongoose.model('User', userSchema);

// Ruter for innlogging og registrering
app.post('/login', async (req, res) => {
    // Logikk for innlogging
});

app.post('/register', async (req, res) => {
    // Logikk for ny brukerregistrering
});

// Start serveren
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveren kjører på port ${PORT}`));
