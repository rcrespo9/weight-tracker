<template>
  <card header="Current BMI">
    <p class="bmi">
      <span class="bmi__number" :class="bmiClass">{{bmi}}</span>
      <span class="bmi__text">{{bmiDescription}} BMI</span>
    </p>
  </card>
</template>

<script>
import Card from './AppCard'
import { mapGetters } from 'vuex'

export default {
  name: 'BMI',
  components: {
    Card
  },
  data() {
    return {
      bmiDescription: '',
      isNormalBMI: false,
      isConcerningBMI: false,
      isDangerousBMI: false
    }
  },
  updated() {
    this.bmiCheck(this.bmi);
  },
  computed: {
    ...mapGetters([
      'bmi'
    ]),
    bmiClass() {
      return {
        'bmi__number--normal': this.isNormalBMI,
        'bmi__number--concerning': this.isConcerningBMI,
        'bmi__number--dangerous': this.isDangerousBMI
      }
    }
  },
  methods: {
    bmiCheck(bmi) {
      switch (true) {
        case (bmi < 18.5):
          this.isDangerousBMI = true
          this.bmiDescription = 'Underweight'
          break;
        case (bmi >= 18.5 && bmi <= 24.9):
          this.isNormalBMI = true
          this.bmiDescription = 'Normal'
          break;
        case (bmi >= 25 && bmi <= 29.9):
          this.isConcerningBMI = true
          this.bmiDescription = 'Overweight'
          break;
        case (bmi >= 30):
          this.isDangerousBMI = true
          this.bmiDescription = 'Obese'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $green: #1b5e20;
  $red: #b71c1c;
  $orange: #bb4d00;

  .bmi {
    margin: 0;

    span {
      display: block;
    }
  }

  .bmi__number {
    font-size: ms(5);
    font-weight: map-get($font-weight, medium);
  }

  .bmi__number--normal {
    color: $green;
  }

  .bmi__number--concerning {
    color: $orange;
  }

  .bmi__number--dangerous {
    color: $red;
  }

  .bmi__text {
    color: $md-gray-text;
    font-size: ms(0);
  }
</style>
