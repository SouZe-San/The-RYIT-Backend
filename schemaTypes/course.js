import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'courseName',
      title: 'Course Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'courseImage',
      title: 'Course image',
      description: 'Please provide a Poster image for this course',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Course Short Description',
      description: 'Please provide a short description of the course',
      type: 'text',
      validation: (Rule) => Rule.required().max(150).error('Not more than 20 words'),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Course full details',
      description: 'Give a Full description of the course',
      type: 'text',
      validation: (Rule) => Rule.required().max(500).error('Not more than 100 words'),
    }),
    defineField({
      name: 'CourseLevel',
      title: 'Course level',
      type: 'string',
      options: {
        list: [
          {title: 'Easy', value: 'Easy'},
          {title: 'intermediate', value: 'intermediate'},
          {title: 'Hard', value: 'Hard'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'CourseDuration',
      title: 'Course Duration',
      type: 'string',
      options: {
        list: [
          {title: '1 month', value: '1 month'},
          {title: '2 month', value: '2 month'},
          {title: '3 month', value: '3 month'},
          {title: '6 month', value: '6 month'},
          {title: '1 year', value: '1 year'},
          {title: '2 year', value: '2 year'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courseEligibility',
      title: 'Course Eligibility',
      description: 'Who is this course for / Who can take this course',
      type: 'text',
      validation: (Rule) => Rule.required().max(300).error('Not more than 60 words'),
    }),
    defineField({
      name: 'courseOpportunities',
      title: 'Course opportunities',
      description: 'Please provide the opportunities after the course',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'extraFacilities',
      title: 'Extra Facilities',
      description: 'What are the extra facilities provided with the course',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'courseLessons',
      title: 'Course Content',
      description: 'Please provide the lessons of the course',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
