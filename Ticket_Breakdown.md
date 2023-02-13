# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Ticket 1: (BE)
  Create ER Diagram for new flow for generating reports.(Backend Ticket)

  Accceptance/Criteria:
    - Database Structure on backend.
    - Should contain three tables  Facilities, Agents, and Shift with relationship among them.

  Implementation:
    - Create 3 tables Facilities, Staff, Agent.
    - which should have relationship like:
        Facility has multiple staff.
        Each satff contain One Agent.



2. Ticket 2: (BE)
  APIs for getting staff list by facility, generate report, assign agent.

  Accceptance/Criteria:
  - 'getShiftsByFacility'
    Should list all the staff list by facility id.
  - 'generateReport'
    Should contain facilities own cusotm id for gerating report.
  - 'assignAgent
    Should assign agent to Shifts posted by Facilities on the platform.

  Implementation:
  - create an api which will return list of all the staff by facility id.
  - create an api which will return pdf by list of shifts.
  - create an api for assiging agent to shifts.

3. Ticket 3: (FE)
  Integration of APIs on Frontend.

  Accceptance/Criteria: -
  -Test all the functionallity.
  -Test coverage should be more than 80%.

  Implementation: -
  -Integration of APIs provided by backend.
  -Create function called 'getShiftsByFacility; in which Api response is obtained  i.e. list of shifts.
  -Create funciton called 'generateReport' in which list of shits is passed as params after that hitting the Api for genertePDF.
  -Stored PDF response.
