export const todoMixin = {
  methods: {
    getFormattedTimeStamp(calcDateRange) {
      let calcDate = new Date() - new Date(calcDateRange)
      const dayCount = Math.floor(calcDate / 86400000)
      if (dayCount > 365) {
        return {
          dayCount: (dayCount / 365).toFixed(0) + ' year ago',
          color: '#e13636'
        }
      } else if (dayCount > 30) {
        return {
          dayCount: (dayCount / 30).toFixed(0) + ' month ago',
          color: '#e13636'
        }
      } else if (dayCount > 0) {
        return {
          dayCount: dayCount + ' days ago',
          color: '#e13636'
        }
      } else if (dayCount === 0) {
        return {
          dayCount: 'Today',
          color: '#2c3340'
        }
      } else if (dayCount < -30) {
        return {
          dayCount: Math.abs(dayCount / 30).toFixed(0) + ' month to go',
          color: '#397adc'
        }
      } else if (dayCount < -365) {
        return {
          dayCount: Math.abs(dayCount / 365).toFixed(0) + ' year to go',
          color: '#397adc'
        }
      }

      return {
        dayCount: Math.abs(dayCount) + ' days to go',
        color: '#397adc'
      }
    }
  }
}
