const mongoose = require('mongoose');

// Schema para os exercícios
const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number, // Peso, caso o exercício inclua levantamento de peso
        required: false
    },
    duration: {
        type: Number, // Duração em minutos, caso seja um exercício baseado em tempo
        required: false
    }
});

// Schema para os planos de treino (ex: treino de costas, treino de pernas)
const WorkoutPlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Nome do plano de treino, ex: "Treino de Costas"
    },
    exercises: [ExerciseSchema], // Lista de exercícios dentro do plano de treino
    dateCreated: {
        type: Date,
        default: Date.now // Data de criação do plano de treino
    }
});


const UserDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: false
    },
    weight: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    
    }
},{
    collection: 'UserInfo'
});

mongoose.model('UserInfo', UserDetailSchema);