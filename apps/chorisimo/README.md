# Chorisimo

An application about chores, rewards and workload spreading around the house. Perfect for a family to delegate chores on
the children and reward them.

## Technologies used:

- NestJS - for the back end
- Angular - for the front end
- TailwindCSS - for styling
- Angular CDK - for utilities
- Heroku Postgres - for the database
- TypeORM - for the ORM layer
- Jest - for unit testing
- Cypress - for E2E testing
- Passport - for user authentication

## Capabilities

Chorisimo allows its users the following:

- [Account creation and management](#account)
- [Family creation and management](#family)
- [Chores creation and management](#chores)
- [Prize creation and management](#prizes)

## Specifications

In this section I will expand upon the capabilities described above.

### Account creation and management <a id="account"></a>

Any non-logged-in user is able to create an account.
The following data is required to create an account:

- email address
- nickname
- password

After logging in, a user can manage his account by doing the following operations:

- change email address
- change nickname
- change password
- delete account

| :exclamation: | When an account gets deleted, only their internal id and nickname remains - but not any other PII |
|---------------|:--------------------------------------------------------------------------------------------------|

### Family creation and management <a id="family"></a>

A logged-in user is able to create a family.

A family is a group of users managed by one of more family parents and owned by the creator.

Users within a family can do the following:

- Invite new family members
- Promote members to a higher role
- Remove family members
- Delete the family
- Create, edit, delete, assign, claim and complete chores
- Create, edit, delete and claim prizes

Inside a family, there are 3 roles:

- `OWNER` - exactly 1 owner
- `PARENT` - any number of parents
- `CHILD` - any number of children

Every family member has a currency called `points` that has value only within that family.

| :exclamation: | When an `OWNER` deletes their account also remove the family                                                              |
|---------------|:--------------------------------------------------------------------------------------------------------------------------|
| :exclamation: | If an `OWNER` assigns the `OWNER` role to someone else, he is losing the `OWNER` role and gets assigned the `PARENT` role |                                                           |

### Chores creation and management <a id="chores"></a>

A chore is a single unit of work within a family assigned to a parent, children or even the owner itself.

A chore is defined as a combination of the following:

- name - a `string` up to 50 characters
- description - a `string` up to 500 characters
- (optional)picture - an image - png, jpg, etc - of 300(px)x300(px)
- points - a positive number
- importance - an enum: `LOW`, `MEDIUM`, `HIGH`, `IMPORTANT`
- (optional)assignee - the user who must do it
- status - an enum: `UNASSIGNED`, `ASSIGNED`, `BLOCKED` ,`ONGOING`, `VERIFYING`, `DONE`
- readonly - `boolean` - default `false`

A chore can be created and edited only by the users with the following roles: `OWNER` and `PARENT`.

Only the `OWNER` and `PARENT` users can assign chores to someone else.

Any user can take a chore and assign it to himself - also known as claim the chore.

- If a chore has no `assignee` it is in the `UNASSIGNED` status.
- If a chore has been assigned or claimed it is in the `ASSIGNED` status.
- If a user needs help and cannot continue he will mark a chore as `BLOCKED`.
- If a user is working on a chore, he will mark it as `ONGOING`.
- If a `CHILD` user has finished a chore, he must mark it as `VERIFYING`.
- If a `PARENT` or `OWNER` user has finished a chore, he can mark it as either `VERIFYING` or `DONE`.
- If a `PARENT` or `OWNER` verified a chore marked as `VERIFYING` by the child he can mark it as `DONE` or as `ONGOING`
  depending on how well it was done.

After a chore is marked as `DONE`, the `readonly` flag gets set to true, and it can no longer be edited or deleted.
Also, the points of the chore gets added to the points of the user assigned to it.

Every user has a history where he can see what chores he finished.

| :exclamation: | When a `CHILD` or `PARENT` user deletes their account or gets removed from the family, set the `assignee` field to `null` |
|---------------|:--------------------------------------------------------------------------------------------------------------------------|

### Prize creation and management <a id="prizes"></a>

An `OWNER` user can define a set of prizes that everyone can claim when they have a big enough score. In this case, the
score acts as a currency that allows them to "buy" the prizes.

A prize is defined as a combination of the following:

- name - a `string` up to 50 characters
- description - a `string` up to 500 characters
- (optional)image - an image - png, jpg, etc - of 300(px)x300(px)
- (optional)url - a link towards a website with the reward itself
- (optional)count - the number of times a reward can be claimed _in total_ - if missing it means it can be claimed
  ad-infinitum
- price - the number of points the users must spend to claim the reward. Must be positive
- emitter - the user who created the prize.
- status - an enum: `AVAILABLE`, `EXPIRED`, `OUT_OF_STOCK`.
- (optional)expiresOn - a `Date` in the future

A prize cannot be assigned, only claimed by paying the required amount of points.

When a user claims the prize, the following happen:

- The cost of the prize gets deducted from the points of the user
- If it exists, the `count` of the prize gets deducted by 1. If the result is 0, set the status to `OUT_OF_STOCK`

Only a prize with the status `AVAILABLE` can be claimed.

If the `expiresOn` date is set, the prize status will be set to `EXPIRED` on the given date.

Every user has a history where he can see what prizes he claimed.
